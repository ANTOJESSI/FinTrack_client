import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import "./SpendingDonutChart.css";

const data = [
  { name: 'Rent', value: 1200 },
  { name: 'Food', value: 450 },
  { name: 'Shopping', value: 300 },
  { name: 'Transport', value: 200 },
  { name: 'Misc', value: 150 },
];

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const SpendingDonutChart = () => {
  const totalSpending = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="donut-container">
      <h3>Spending Breakdown</h3>
      
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70} // This creates the "Donut" hole
              outerRadius={90}
              paddingAngle={8} // Space between the slices
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend iconType="circle" />
          </PieChart>
        </ResponsiveContainer>

        {/* Central Text for the Donut Hole */}
        <div className="donut-center-label">
          <span className="total-label">Total</span>
          <span className="total-amount">${totalSpending}</span>
        </div>
      </div>
    </div>
  );
};

export default SpendingDonutChart;