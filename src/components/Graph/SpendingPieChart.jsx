import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import "./SpendingPieChart.css";

const data = [
  { name: 'Food & Drinks', value: 450 },
  { name: 'Rent', value: 1200 },
  { name: 'Shopping', value: 300 },
  { name: 'Transport', value: 200 },
  { name: 'Entertainment', value: 150 },
];

// Professional color palette
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

const SpendingPieChart = () => {
  return (
    <div className="pie-chart-container">
      <h3>Spending Breakdown</h3>
      <div style={{ width: '100%', height: 300, minWidth: 0 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60} // This makes it a "Donut" instead of a "Pie"
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingPieChart;