import { Admin } from "../models/Admin.model.js";

const registerAdmin = async (res, req) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const newAdmin = new Admin({ name, email, password });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const loginAdmin = async (res, req) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const user = await Admin.findOne({ email });
    if (user.password === password) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllAdminClass = async (res, req) => {
  try {
    const admin = await Admin.findById(req.params.id).populate("classes");
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { registerAdmin, loginAdmin, getAllAdminClass };
