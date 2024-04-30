const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
import morgan from "morgan";
const dbConfig = require("./config/dbConfig");
import cors from "cors";

const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");

app.use(morgan("dev"));
app.use(cors());
app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
