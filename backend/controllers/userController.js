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
      { userId: user.id, username: user.username },
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

export { getAllUsers, addUser, loginUser };
