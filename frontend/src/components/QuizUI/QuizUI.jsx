import React from "react";
import { QuestionTable } from "../QuestionTable/QuestionTable";
import "./QuizUI.css";
export const QuizUI = () => {
  return (
    <>
      <header></header>
      <div className="container">
        <div className="main">
          <div className="questionStatement">
            <h4>Question 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, tempore.
            </p>
          </div>
          <ul className="options">
            <li className="option shadow rounded-lg">
              <p>
                <input type="radio" name="quizOption" />
                A. Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li className="option shadow rounded-lg">
              <p>
                <input type="radio" name="quizOption" />
                B. Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li className="option shadow rounded-lg">
              <p>
                <input type="radio" name="quizOption" />
                C. Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li className="option shadow rounded-lg">
              <p>
                <input type="radio" name="quizOption" />
                D. Lorem ipsum dolor sit amet.
              </p>
            </li>
          </ul>
          <div className="buttons">
            <div className="left">
              <button className="btn btn-primary">Mark for Review</button>
              <button className="btn btn-primary">Clear Response</button>
            </div>
            <div className="right">
              <button className="btn btn-primary">Save & Next</button>
            </div>
          </div>
        </div>
        <QuestionTable />
      </div>
    </>
  );
};
