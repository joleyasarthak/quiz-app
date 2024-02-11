import React, { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
  const [minutes, setMinutes] = useState(30); // Initial minutes
  const [timeLimit, setTimeLimit] = useState(minutes * 60 * 1000);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [colorClass, setColorClass] = useState("color-full");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1000);

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        return;
      }

      if (timeRemaining <= timeLimit / 2) {
        setColorClass("color-half");
      } else if (timeRemaining <= timeLimit / 4) {
        setColorClass("color-empty");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLimit, timeRemaining]);

  const formattedTimeRemaining = () => {
    const seconds = Math.floor(timeRemaining / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours.toString().padStart(2, "0")}:${(minutes % 60)
      .toString()
      .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div id="countdown">
      <div id="tiles" className={colorClass}>
        {formattedTimeRemaining()}
      </div>
      <div id="left" className="countdown-label">
        {timeRemaining <= 0 ? "Timer Stopped" : "Time Remaining"}
      </div>
    </div>
  );
}
