import { Router } from "express";
import {
  getAllUsers,
  addUser,
  loginUser,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

// Public routes
router.post("/", addUser);
router.post("/login", loginUser);

// Protected routes (require valid JWT in cookie)
router.get("/", authMiddleware, getAllUsers);

router.get("/me", authMiddleware, (req, res) => {
  res.json({ success: true, user: req.user });
});

export default router;
