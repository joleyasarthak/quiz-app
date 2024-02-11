import { Class } from "../models/Class.model.js";
import { Admin } from "../models/Admin.model.js";

const getAllClasses = async (res, req) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createClass = async (res, req) => {
  try {
    const { name, admin } = req.body;
    if (!name || !admin) {
      res.status(400).json({ message: "Name and Admin is required" });
    }
    const studentclass = new Class({ name, admin });
    const classadmin = await Admin.findById(admin);
    if (!classadmin) {
      return res.status(404).json({ message: "Admin not found!" });
    }
    await studentclass.save();
    classadmin.classes.push(studentclass._id);
    await classadmin.save();
    res.status(201).json(studentclass);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getClassById = async (res, req) => {
  const { id } = req.params;
  try {
    const studentclass = await Class.findById(id).populate("students");
    if (!studentclass) {
      return res.status(404).json({ message: "Class not found!" });
    }
    res.status(200).json(studentclass);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateClassById = async (res, req) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const studentclass = await Class.findById(id);
    if (!studentclass) {
      return res.status(404).json({ message: "Class not found!" });
    }
    studentclass.name = name;
    await studentclass.save();
    res.status(200).json(studentclass);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getAllClasses, createClass, getClassById, updateClassById };
