import { Student } from "../models/Student.model.js";
import { Class } from "../models/Class.model.js";

const getAllStudents = async (res, req) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createStudent = async (res, req) => {
  const { name, email, password, class_id } = req.body;
  if (!name || !email || !password || !class_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const newStudent = new Student({ name, email, password });
    const studentclass = await Class.findById(class_id);
    if (!studentclass) {
      return res.status(404).json({ message: "Class not found!" });
    }
    await newStudent.save();
    studentclass.students.push(newStudent._id);
    await studentclass.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export { getAllStudents, createStudent };
