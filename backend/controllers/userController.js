import ApiError from "../utils/ApiError.js"; // custom error class
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import pool from "../db.js";

const getAllUsers = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json({ success: true, data: result.rows });
  } catch (err) {
    next(err);
  }
};

const addUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(new ApiError(400, "All fields are required"));
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await pool.query(
      "INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *",
      [email, username, hashedPassword]
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    if (err.code === "23505") {
      return next(new ApiError(409, "Email already exists"));
    }
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      maxAge: 60 * 60 * 1000,
    });

    res.json({ success: true, message: "Logged in successfully" });
  } catch (err) {
    next(err);
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
  });
  res.json({ success: true, message: "Logged out successfully" });
};

const updateProfile = async (req, res, next) => {
  try {
    const { email, username } = req.body;

    let fields = [];
    let values = [];
    let i = 1;

    if (email) {
      fields.push(`email = $${i++}`);
      values.push(email);
    }

    if (username) {
      fields.push(`username = $${i++}`);
      values.push(username);
    }

    if (fields.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No fields to update" });
    }

    values.push(req.user.userId);

    const query = `
      UPDATE users
      SET ${fields.join(", ")}
      WHERE id = $${i}
      RETURNING id, username, email
    `;

    const result = await pool.query(query, values);

    res.json({ success: true, user: result.rows[0] });
  } catch (err) {
    next(err);
  }
};

// --- Update Password ---
const updatePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Both current and new passwords are required",
      });
    }

    // Fetch user
    const userResult = await pool.query(
      "SELECT password FROM users WHERE id = $1",
      [req.user.userId]
    );
    if (userResult.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Verify old password
    const validPassword = await bcrypt.compare(
      currentPassword,
      userResult.rows[0].password
    );
    if (!validPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Current password is incorrect" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const result = await pool.query(
      `UPDATE users SET password = $1 WHERE id = $2 RETURNING id, username, email`,
      [hashedPassword, req.user.userId]
    );

    res.json({ success: true, user: result.rows[0] });
  } catch (err) {
    next(err);
  }
};

// --- Delegator ---
const updateUser = async (req, res, next) => {
  try {
    const { newPassword } = req.body;

    if (newPassword) {
      return updatePassword(req, res, next);
    }

    return updateProfile(req, res, next);
  } catch (err) {
    next(err);
  }
};
export { getAllUsers, addUser, loginUser, logoutUser, updateUser };
