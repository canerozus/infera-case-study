import React from "react";
import "./progress-bar.css";

const ProgressBar = ({ currentDay, totalDays }) => {
  const progress = (currentDay / totalDays) * 100;

  return (
    <div className="progress">
      <span className="progress-tooltip" style={{ left: `${progress}%` }}>
        {currentDay}. gün
      </span>
      <span className="total-days">{totalDays}</span>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
