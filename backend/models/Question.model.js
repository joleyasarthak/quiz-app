import mongoose, { Schema } from "mongoose";

const QuestionSchema = new Schema({
  content: { type: String, required: true },
  optionA: { type: String, required: true },
  optionB: { type: String, required: true },
  optionC: { type: String, required: true },
  optionD: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  score: { type: Number, required: true },
});

export const Question = mongoose.model("Question", QuestionSchema);
