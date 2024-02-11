import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAllAdminClass,
} from "../controllers/Admin.controller.js";
const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/:id", getAllAdminClass);

export default router;
