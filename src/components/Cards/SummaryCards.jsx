import React from "react";
import "./SummaryCards.css";

import Graphs from "../Graph/Graphs";

const SummaryCards = ({ title, amount, icon, trend, isPositive }) => {
  return (
    <div className="card-container">
      <div className="title-trend">
        <div className="card-header">
          <span>{icon}</span> {title}
        </div>
        <div
          className={`trend-label ${isPositive ? "trend-positive" : "trend-negative"}`}
        >
          {isPositive ? "↑" : "↓"} {trend}%
        </div>
      </div>

      <div className="amount-text">{amount}</div>

      <div className="card-graph">
        <Graphs color={isPositive ? "#10b981" : "#ef4444"} />
      </div>
    </div>
  );
};
export default SummaryCards;
