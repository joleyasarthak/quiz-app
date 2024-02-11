import React from "react";
import "./QuestionTable.css";
import Timer from "../Timer/Timer";
export const QuestionTable = () => {
  return (
    <>
      <main>
        <Timer />
        <div class="question-container">
          <div class="q">1</div>
          <div class="q">2</div>
          <div class="q">3</div>
          <div class="q">4</div>
          <div class="q">5</div>
          <div class="q">6</div>
          <div class="q">7</div>
          <div class="q">8</div>
          <div class="q">9</div>
          <div class="q">10</div>
          <div class="q">11</div>
          <div class="q">12</div>
          <div class="q">13</div>
          <div class="q">14</div>
          <div class="q">15</div>
          <div class="q">16</div>
        </div>
        <button id="test-submit" class="btn btn-success">
          Submit Test
        </button>
      </main>
    </>
  );
};
