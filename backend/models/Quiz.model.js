import mongoose from "mongoose";
import { Schema } from "mongoose";

const QuizSchema = new Schema({
  name: { type: String, required: true },
  studentClass: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  startDate: { type: Date },
  endDate: { type: Date },
});

export const Quiz = mongoose.model("Quiz", QuizSchema);
