import React, { useState } from "react";
import "./TransactionsPage.css";
import TransactionsTable from "./Table/TransactionsTable";
import Insights from "./Insights";

const initialTransactions = [
  { id: 1, date: "2026-04-05", merchant: "Amazon", category: "Shopping", amount: 85.5, type: "Expense" },
  { id: 2, date: "2026-04-04", merchant: "Apple Music", category: "Entertainment", amount: 9.99, type: "Expense" },
  { id: 3, date: "2026-04-04", merchant: "Salary Deposit", category: "Income", amount: 3200.0, type: "Income" },
  { id: 4, date: "2026-04-03", merchant: "Zomato", category: "Food", amount: 24.2, type: "Expense" },
  { id: 5, date: "2026-04-02", merchant: "Shell Petrol", category: "Transport", amount: 55.0, type: "Expense" },
];

// 1. Add currentRole to the props here!
const TransactionsPage = ({ currentRole }) => {
  const [data, setData] = useState(initialTransactions);

  return (
    <div className="transactions-page-container">
      {/* Mobile-Only Insights Section */}
      <div className="mobile-insights-wrapper">
         <Insights data={data} />
         {/* Table Section */}
      <TransactionsTable 
        currentRole={currentRole} 
        data={data} 
        setData={setData} 
      />
      </div>

      


    </div>
  );
};

export default TransactionsPage;