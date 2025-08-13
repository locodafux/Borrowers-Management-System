import pool from "../db.js";
import ApiError from "../utils/ApiError.js"; // custom error class

const getAllUsers = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json({ success: true, data: result.rows });
  } catch (err) {
    next(err);
  }
};

const addUser = async (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return next(new ApiError(400, "Name and email are required"));
  }

  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    if (err.code === "23505") {
      return next(new ApiError(409, "Email already exists"));
    }
    next(err); // Pass any other error to global handler
  }
};

export { getAllUsers, addUser };
