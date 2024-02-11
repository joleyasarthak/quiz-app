import express from "express";

import {
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
} from "../controllers/Question.controller.js";

const router = express.Router();

router.get("/:id", getQuestion);
router.post("/:quiz_id", createQuestion);
router.put("/:question_id", updateQuestion);
router.delete("/:quiz_id/:question_id", deleteQuestion);

export default router;
