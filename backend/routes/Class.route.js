import express from "express";
import {
  getAllClasses,
  createClass,
  getClassById,
  updateClassById,
} from "../controllers/Class.controller.js";

const router = express.Router();

router.get("/", getAllClasses);
router.get("/:id", getClassById);
router.post("/", createClass);
router.put("/:id", updateClassById);

export default router;
