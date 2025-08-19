import { Router } from "express";
import {
  getAllUsers,
  addUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

// Public routes
router.post("/", addUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/", authMiddleware, getAllUsers);
router.get("/me", authMiddleware, (req, res) => {
  res.json({ success: true, user: req.user });
});

export default router;
