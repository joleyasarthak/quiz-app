const router = require("express").Router();
const Exam = require("../models/examModel");
const authMiddleware = require("../middlewares/authMiddleware");
const Question = require("../models/questionModel");
const { generate } = require("../lib/gpt");
// add exam

router.post("/add", authMiddleware, async (req, res) => {
  try {
    // check if exam already exists
    const examExists = await Exam.findOne({ name: req.body.name });
    if (examExists) {
      return res
        .status(200)
        .send({ message: "Exam already exists", success: false });
    }
    req.body.questions = [];
    const newExam = new Exam(req.body);
    await newExam.save();
    res.send({
      message: "Exam added successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// get all exams
router.post("/get-all-exams", authMiddleware, async (req, res) => {
  try {
    const exams = await Exam.find({});
    res.send({
      message: "Exams fetched successfully",
      data: exams,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// get exam by id
router.post("/get-exam-by-id", authMiddleware, async (req, res) => {
  try {
    const exam = await Exam.findById(req.body.examId).populate("questions");
    res.send({
      message: "Exam fetched successfully",
      data: exam,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// edit exam by id
router.post("/edit-exam-by-id", authMiddleware, async (req, res) => {
  try {
    await Exam.findByIdAndUpdate(req.body.examId, req.body);
    res.send({
      message: "Exam edited successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// delete exam by id
router.post("/delete-exam-by-id", authMiddleware, async (req, res) => {
  try {
    // just for my ocd for cleanliness
    const exam = await Exam.findById(req.body.examId);
    for (const questionId of exam.questions) {
      await Question.deleteOne(questionId);
    }
    await Exam.findByIdAndDelete(req.body.examId);
    res.send({
      message: "Exam deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// add question to exam

router.post("/add-question-to-exam", authMiddleware, async (req, res) => {
  try {
    // add question to Questions collection
    const newQuestion = new Question(req.body);
    const question = await newQuestion.save();

    // add question to exam
    const exam = await Exam.findById(req.body.exam);
    exam.questions.push(question._id);
    await exam.save();
    res.send({
      message: "Question added successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// edit question in exam
router.post("/edit-question-in-exam", authMiddleware, async (req, res) => {
  try {
    // edit question in Questions collection
    await Question.findByIdAndUpdate(req.body.questionId, req.body);
    res.send({
      message: "Question edited successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// delete question in exam
router.post("/delete-question-in-exam", authMiddleware, async (req, res) => {
  try {
    // delete question in Questions collection
    await Question.findByIdAndDelete(req.body.questionId);

    // delete question in exam
    const exam = await Exam.findById(req.body.examId);
    exam.questions = exam.questions.filter(
      (question) => question._id != req.body.questionId
    );
    await exam.save();
    res.send({
      message: "Question deleted successfully",
      success: true,
    });
  } catch (error) {}
});

router.post("/generate-questions", async (req, res) => {
  const { exam_id } = req.body;
  try {
    const exam = await Exam.findById(exam_id);
    if (!exam) {
      return res.status(400).json({ message: "Exam not found" });
    }
    const questions = await generate(
      `You are a helpful AI that is able to generate ${exam.totalMarks} mcq questions and answers, the length of each answer should not be more than 15 words, store all answers and questions and options in a JSON array. You are to generate a random hard mcq question about ${exam.category}. Format of the JSON array should be: [{question: "question", correctAnswer: "A/B/C/D", optionA: "optionA with max length of 15 words", optionB: "optionB with max length of 15 words", optionC: "optionC with max length of 15 words", optionD: "optionD with max length of 15 words"}, ...]. return response in JSON format [{}]`
    );
    console.log(questions);
    for (let i = 0; i < exam.totalMarks; i++) {
      try {
        const newQuestion = new Question({
          exam: exam_id,
          name: questions[i].question,
          correctOption: questions[i].correctAnswer,
          options: {
            A: questions[i].optionA,
            B: questions[i].optionB,
            C: questions[i].optionC,
            D: questions[i].optionD,
          },
        });
        exam.questions.push(newQuestion._id);
        await newQuestion.save();
      } catch (e) {
        console.log(e);
      }
    }
    await exam.save();
    res
      .status(200)
      .json({ message: "Questions generated successfully", success: true });
  } catch (error) {
    res.status(500).json({
      message: "Chatgpt API gone paid. Send Money for API🥲",
    });
  }
});

module.exports = router;
