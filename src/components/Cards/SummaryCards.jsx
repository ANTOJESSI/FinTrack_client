import React from "react";
import "./SummaryCards.css";

import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import Graphs from "../Graph/Graphs";

const SummaryCards = ({ title, amount, icon, trend, isPositive }) => {
  return (
    <>
      <div className="card-container">
        <div>
          <div className="card-holder">
            <div className="title-trend">
              <div className="card-header">{title}</div>
              <div>{trend}%</div>
            </div>

            <div>{amount}</div>
            {isPositive === true ? <Graphs color="#10b981" /> : <Graphs color="#ef4444" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryCards;
