import React from 'react';
import './Insights.css';

const Insights = ({ data }) => {
  const expenses = data.filter(t => t.type === 'Expense');
  const categoryMap = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  const highestCategory = Object.keys(categoryMap).length > 0 
    ? Object.keys(categoryMap).reduce((a, b) => categoryMap[a] > categoryMap[b] ? a : b)
    : "N/A";

  const lastMonthExpense = 1500;
  const lastMonthIncome = 3000;
  const currentExpense = expenses.reduce((sum, t) => sum + t.amount, 0);
  const currentIncome = data.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);

  const expenseDiff = ((currentExpense - lastMonthExpense) / lastMonthExpense * 100).toFixed(1);
  const incomeDiff = ((currentIncome - lastMonthIncome) / lastMonthIncome * 100).toFixed(1);

  return (
    <div className="insights-vertical-wrapper">
      <h3 className="section-title">Smart Insights</h3>
      <div className="insights-vertical-list">
        
        {/* Insight 1 */}
        <div className="insight-card vertical">
          <div className="insight-icon orange">🔥</div>
          <div className="insight-content">
            <p className="insight-label">Top Category</p>
            <h4 className="insight-value">{highestCategory}</h4>
          </div>
        </div>

        {/* Insight 2 */}
        <div className="insight-card vertical">
          <div className={`insight-icon ${expenseDiff > 0 ? 'red' : 'green'}`}>
            {expenseDiff > 0 ? '⚠️' : '✅'}
          </div>
          <div className="insight-content">
            <p className="insight-label">Spending Trend</p>
            <h4 className="insight-value">{expenseDiff > 0 ? `+${expenseDiff}%` : `${expenseDiff}%`}</h4>
          </div>
        </div>

        {/* Insight 3 */}
        <div className="insight-card vertical">
          <div className={`insight-icon ${incomeDiff >= 0 ? 'green' : 'red'}`}>
            {incomeDiff >= 0 ? '💰' : '📉'}
          </div>
          <div className="insight-content">
            <p className="insight-label">Income Trend</p>
            <h4 className="insight-value">{incomeDiff >= 0 ? `+${incomeDiff}%` : `${incomeDiff}%`}</h4>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Insights;