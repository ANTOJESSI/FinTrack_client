import React, { useState } from "react";
import "./TransactionsTable.css";

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

const TransactionsTable = ({ currentRole }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filteredData = initialTransactions.filter((t) => {
    const matchesSearch = t.merchant
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || t.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="table-container">
      <div className="table-header">
        <h3>Transactions</h3>

        <div className="table-controls">
          {/* 1. Only show Add if not a Viewer */}
          {currentRole !== "Viewer" && (
            <button className="add-btn">+ Add Transaction</button>
          )}

          <input
            type="text"
            placeholder="Search merchants..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="filter-select"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Income">Income Only</option>
            <option value="Expense">Expense Only</option>
          </select>
        </div>
      </div>

      <div className="table-responsive">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Merchant</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
              {/* 2. Show Actions column header if not a Viewer */}
              {currentRole !== "Viewer" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td className="merchant-name">{t.merchant}</td>
                <td>
                  <span className="category-tag">{t.category}</span>
                </td>
                <td>
                  <span className={`type-pill ${t.type.toLowerCase()}`}>
                    {t.type}
                  </span>
                </td>
                <td
                  className={`amount ${t.type === "Income" ? "income" : "expense"}`}
                >
                  {t.type === "Income" ? `+$${t.amount}` : `-$${t.amount}`}
                </td>

                {/* 3. Action Buttons Logic */}
                {currentRole !== "Viewer" && (
                  <td>
                    <button className="edit-btn">Edit</button>
                    {currentRole === "Admin" && (
                      <button className="delete-btn">Delete</button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
