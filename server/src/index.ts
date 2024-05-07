import express, { Request, Response } from 'express';
const app = express();
require("dotenv").config();
app.use(express.json());
import morgan from "morgan";
const dbConfig = require("./config/dbConfig");
import cors from "cors";
import serverless from "serverless-http";

const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");

app.use(morgan("dev"));
app.use(cors());
app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute);
app.use("/api/test", (req:Request,res:Response)=>{
  return res.status(200).send("Working!");
})
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export const handler = serverless(app);