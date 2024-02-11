import mongoose, { Schema } from "mongoose";

const ClassSchema = new Schema({
  name: { type: String, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
});

export const Class = mongoose.model("Class", ClassSchema);
