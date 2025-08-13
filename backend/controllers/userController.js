import pool from "../db.js";

const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name,email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getAllUsers, addUser };
