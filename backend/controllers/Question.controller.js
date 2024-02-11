import { Question } from "../models/Question.model.js";
import { Quiz } from "../models/Quiz.model.js";

const createQuestion = async (req, res) => {
  console.log(req.body);
  const { quiz_id } = req.params;
  const { content, optionA, optionB, optionC, optionD, correctAnswer, score } =
    req.body;
  // console.log(req.body);
  if (
    !content ||
    !optionA ||
    !optionB ||
    !optionC ||
    !optionD ||
    !correctAnswer ||
    !score
  )
    return res.status(400).json({ message: "Missing required fields" });
  try {
    const question = new Question({
      content,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
      score,
    });
    const quiz = await Quiz.findById(quiz_id);
    if (!quiz) {
      return res.status(404).json("Quiz not found");
    }
    await question.save();
    quiz.questions.push(question._id);
    await quiz.save();
    return res.status(201).json("Question added successfully.");
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

const getQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);
    res.status(200).json(question);
  } catch (err) {
    console.log(err);
  }
};

const updateQuestion = async (req, res) => {
  // update question in question db
  const { question_id } = req.params;
  const { content, optionA, optionB, optionC, optionD, correctAnswer, score } =
    req.body;
  if (
    !content ||
    !optionA ||
    !optionB ||
    !optionC ||
    !optionD ||
    !correctAnswer ||
    !score
  )
    return res.status(400).json({ message: "Missing required fields" });
  try {
    const question = await Question.findById(question_id);
    if (!question) {
      return res.status(404).json("Question not found");
    }
    await Question.updateOne(
      { _id: question_id },
      {
        content,
        optionA,
        optionB,
        optionC,
        optionD,
        correctAnswer,
        score,
      }
    );
    res.status(201).json("Question updated successfully.");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteQuestion = async (req, res) => {
  const { quiz_id, question_id } = req.params;
  try {
    const quiz = await Quiz.findById(quiz_id);
    const question = await Question.findById(question_id);
    if (!quiz) {
      return res.status(404).json("Quiz id not found");
    }
    if (!question) {
      return res.status(404).json("Question id not found");
    }
    const index = quiz.questions.findIndex(
      (q) => String(q._id) === question_id
    );
    if (index === -1) {
      return res.status(404).json({ message: "Question not found" });
    }
    quiz.questions.splice(index, 1);
    await question.deleteOne();
    await quiz.save();
    return res.status(201).json("Question deleted successfully");
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export { createQuestion, getQuestion, updateQuestion, deleteQuestion };
