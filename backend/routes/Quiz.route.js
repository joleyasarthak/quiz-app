import express, { Router } from "express";
import {
  createQuiz,
  getQuiz,
  updateQuiz,
  deleteQuiz,
  getAllQuiz,
} from "../controllers/Quiz.controller.js";
const router = express.Router();

router.get("/", getAllQuiz);
router.get("/:id", getQuiz);
router.post("/", createQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);
// router.post("/:quiz_id/addQuestion", addQuestionToQuiz);
// router.put("/:quiz_id/updateQuestion/:question_id", updateQuestionInQuiz);
// router.delete("/:quiz_id/deleteQuestion/:question_id", deleteQuestionfromQuiz);

export default router;
