import { Quiz } from "../models/Quiz.model.js";
import { Question } from "../models/Question.model.js";
import mongoose from "mongoose";

const createQuiz = async (req, res) => {
  const { name, studentclass, startDate, endDate } = req.body;
  if (!name || !studentclass || !startDate || !endDate)
    return res.status(400).json({ message: "Missing required fields" });
  try {
    const quiz = new Quiz({
      name,
      studentclass,
      startDate,
      endDate,
    });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getQuiz = async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await Quiz.findById(id).populate("questions");
    res.status(200).json(quiz);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.find();
    res.status(200).json(quiz);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteQuiz = async (req, res) => {
  const { id } = req.params;
  try {
    await Quiz.findByIdAndDelete(id);
    res.status(200).json({ message: "Quiz deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateQuiz = async (req, res) => {
  const { id } = req.params;
  const { name, startDate, endDate } = req.body;
  if (!name || !startDate || !endDate)
    return res.status(400).json({ message: "Missing required fields" });
  try {
    const quiz = new Quiz({
      _id: id,
      name,
      startDate,
      endDate,
    });
    await quiz.save();
    return res.status(201).json(quiz);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

const addQuestionToQuiz = async (req, res) => {};

const deleteQuestionfromQuiz = async (req, res) => {
  
};

export { createQuiz, getQuiz, deleteQuiz, updateQuiz, getAllQuiz };
