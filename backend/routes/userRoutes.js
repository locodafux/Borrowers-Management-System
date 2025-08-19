import { Router } from "express";
import {
  getAllUsers,
  addUser,
  loginUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.post("/login", loginUser);

export default router;
