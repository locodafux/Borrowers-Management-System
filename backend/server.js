import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
