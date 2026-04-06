import React, { useState } from 'react';
import './TransactionsTable.css';

const initialTransactions = [
  { id: 1, date: '2026-04-05', merchant: 'Amazon', category: 'Shopping', amount: 85.50, type: 'Expense' },
  { id: 2, date: '2026-04-04', merchant: 'Apple Music', category: 'Entertainment', amount: 9.99, type: 'Expense' },
  { id: 3, date: '2026-04-04', merchant: 'Salary Deposit', category: 'Income', amount: 3200.00, type: 'Income' },
  { id: 4, date: '2026-04-03', merchant: 'Zomato', category: 'Food', amount: 24.20, type: 'Expense' },
  { id: 5, date: '2026-04-02', merchant: 'Shell Petrol', category: 'Transport', amount: 55.00, type: 'Expense' },
];

const TransactionsTable = ({ currentRole }) => {
  const [data, setData] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  // --- DELETE Logic (Admin Only) ---
  const handleDelete = (id) => {
    if (window.confirm("Delete this transaction?")) {
      setData(data.filter(item => item.id !== id));
    }
  };

  // --- EDIT Logic (Admin & Editor) ---
  const handleEdit = (id, item) => {
    const newName = window.prompt("Edit Merchant Name:", item.merchant);
    if (newName === null) return;

    const newAmount = window.prompt("Edit Amount:", item.amount);
    if (newAmount === null) return;

    const newType = window.prompt("Edit Type (Income/Expense):", item.type);
    if (newType === null) return;

    const updatedData = data.map((t) =>
      t.id === id
        ? { 
            ...t, 
            merchant: newName, 
            amount: parseFloat(newAmount) || t.amount, 
            type: newType.charAt(0).toUpperCase() + newType.slice(1).toLowerCase() 
          }
        : t
    );
    setData(updatedData);
  };

  // --- ADD Logic ---
  const handleAdd = () => {
    const merchant = window.prompt("Enter Merchant Name:");
    const amount = window.prompt("Enter Amount:");
    const type = window.prompt("Enter Type (Income/Expense):");
    if (merchant && amount && type) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        merchant,
        category: 'Manual',
        amount: parseFloat(amount),
        type: type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
      };
      setData([newEntry, ...data]);
    }
  };

  // --- FILTERING LOGIC ---
  const filteredData = data.filter((t) => {
    const matchesSearch = t.merchant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || t.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="table-container">
      <div className="table-header">
        <h3>Transactions</h3>
        <div className="table-controls">
          {currentRole !== "Viewer" && (
            <button className="add-btn" onClick={handleAdd}>+ Add</button>
          )}
          
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Type Dropdown Filter */}
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
              {currentRole !== "Viewer" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td className="merchant-name">{t.merchant}</td>
                  <td><span className="category-tag">{t.category}</span></td>
                  
                  {/* Type Pill */}
                  <td>
                    <span className={`type-pill ${t.type.toLowerCase()}`}>
                      {t.type}
                    </span>
                  </td>

                  {/* Amount logic based on Type */}
                  <td className={`amount ${t.type === 'Income' ? 'income' : 'expense'}`}>
                    {t.type === 'Income' ? `+$${t.amount}` : `-$${t.amount}`}
                  </td>
                  
                  {currentRole !== "Viewer" && (
                    <td className="action-buttons">
                      <button className="edit-btn" onClick={() => handleEdit(t.id, t)}>Edit</button>
                      {currentRole === "Admin" && (
                        <button className="delete-btn" onClick={() => handleDelete(t.id)}>Delete</button>
                      )}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-results">No matches found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;