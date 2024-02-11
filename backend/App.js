import express from "express";
import "./env.js";
import dbconnect from "./database/connect.js";
import ClassRoute from "./routes/Class.route.js";
import StudentRoute from "./routes/Student.route.js";
import AdminRoute from "./routes/Admin.route.js";
import QuizRoute from "./routes/Quiz.route.js";
import QuestionRoute from "./routes/Question.route.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
dbconnect();

app.use("/api/class", ClassRoute);
app.use("/api/student", StudentRoute);
app.use("/api/admin", AdminRoute);
app.use("/api/quiz", QuizRoute);
app.use("/api/question", QuestionRoute);

app.listen(process.env.PORT, () => {
  console.log(`App listening at ${process.env.PORT}`);
});
