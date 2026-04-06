import React from "react";
import { useState } from "react";
import SummaryCards from "./Cards/SummaryCards";
import "./HomePage.css";
import Header from "./Header";
import BalanceChart from "./Graph/BalanceChart";
import SpendingPieChart from "./Graph/SpendingPieChart";
import SpendingDonutChart from "./Graph/SpendingDonutChart";
import TransactionsTable from "./Table/TransactionsTable";


const HomePage = ({ currentRole }) => {
  const cardData = [
    {
      id: 1,
      title: "Total Balance",
      amount: "$24,500.00",
      icon: "💳",
      trend: "12.5",
      isPositive: true,
    },
    {
      id: 2,
      title: "Monthly Income",
      amount: "$12,800.00",
      icon: "🏦",
      trend: "5.2",
      isPositive: true,
    },
    {
      id: 3,
      title: "Monthly Expense",
      amount: "$8,500.00",
      icon: "💸",
      trend: "2.1",
      isPositive: false, // Debt increasing is usually red/negative
    },
  ];
  return (
    <>
      {/* <div className="homepage-container">
      <div className="homepage-header">
        <p>FinTrack</p>


      </div>

    </div> */}
      {/* <Header /> */}

      <div className="homepage-outer-layout">
        <div className="cards-placeholder">
          {cardData.map((data) => (
            <SummaryCards
              key={data.id}
              title={data.title}
              amount={data.amount}
              icon={data.icon}
              trend={data.trend}
              isPositive={data.isPositive}
            />
          ))}
        </div>
        <div className="charts-trends-div">
          <div >
            <BalanceChart />
          </div>
          <div >
            {/* <SpendingPieChart /> */}
            <SpendingDonutChart/>
          </div>
          
        </div>
        {/* Transactions Table */}
        <TransactionsTable currentRole={currentRole}/>


      </div>
    </>
  );
};

export default HomePage;
