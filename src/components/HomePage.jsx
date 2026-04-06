import React from "react";
import { useState } from "react";
import SummaryCards from "./Cards/SummaryCards";
import "./HomePage.css";
import Header from "./Header";
import BalanceChart from "./Graph/BalanceChart";
import SpendingPieChart from "./Graph/SpendingPieChart";
import SpendingDonutChart from "./Graph/SpendingDonutChart";
import TransactionsTable from "./Table/TransactionsTable";
import Insights from "./Insights";

const initialTransactions = [
  {
    id: 1,
    date: "2026-04-05",
    merchant: "Amazon",
    category: "Shopping",
    amount: 85.5,
    type: "Expense",
  },
  {
    id: 2,
    date: "2026-04-04",
    merchant: "Apple Music",
    category: "Entertainment",
    amount: 9.99,
    type: "Expense",
  },
  {
    id: 3,
    date: "2026-04-04",
    merchant: "Salary Deposit",
    category: "Income",
    amount: 3200.0,
    type: "Income",
  },
  {
    id: 4,
    date: "2026-04-03",
    merchant: "Zomato",
    category: "Food",
    amount: 24.2,
    type: "Expense",
  },
  {
    id: 5,
    date: "2026-04-02",
    merchant: "Shell Petrol",
    category: "Transport",
    amount: 55.0,
    type: "Expense",
  },
];

const HomePage = ({ currentRole }) => {
  const [data, setData] = useState(initialTransactions);
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
          <div>
            <BalanceChart />
          </div>
          <div>
            {/* <SpendingPieChart /> */}
            <SpendingDonutChart />
          </div>
        </div>
        {/* Transactions Table */}
        <div className="transaction-data">
          <TransactionsTable currentRole={currentRole} />
        <Insights data={data} />
        
        </div>
        
      </div>
    </>
  );
};

export default HomePage;
