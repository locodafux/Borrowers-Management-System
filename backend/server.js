// server.js
const express = require("express");
const pool = require("./db");
require("dotenv").config();

const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("PostgreSQL + Node.js Backend is running 🚀");
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Add a user
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.detail);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
