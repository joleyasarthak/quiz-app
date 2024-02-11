import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { QuizDashboard } from "./components/QuizDashboard/QuizDashboard";
import { AddQuestion } from "./components/AddQuestion/AddQuestion";
import { AddNewQuiz } from "./components/NewTest/AddNewQuiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz/:id" element={<QuizDashboard />} />
          <Route path="/addQuestion/:id" element={<AddQuestion />} />
          <Route path="/addQuiz" element={<AddNewQuiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
