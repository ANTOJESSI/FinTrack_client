import React, { useState } from "react"; // Combined imports
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./BalanceChart.css";

const data2026 = [
  { month: "Jan", balance: 5240, expenses: 2400 },
  { month: "Feb", balance: 5800, expenses: 1398 },
  { month: "Mar", balance: 6100, expenses: 3000 },
  { month: "Apr", balance: 6390, expenses: 3800 },
];

const data2025 = [
  { month: "Jan", balance: 3100, expenses: 2100 },
  { month: "Feb", balance: 3400, expenses: 1900 },
  { month: "Mar", balance: 3900, expenses: 2200 },
  { month: "Apr", balance: 4200, expenses: 2500 },
];

const BalanceChart = () => {
  const [selectedYear, setSelectedYear] = useState("2026");

  // We use this variable to tell the chart which data to show
  const activeData = selectedYear === "2026" ? data2026 : data2025;

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Financial Overview</h3>

        {/* Toggle buttons to switch years */}
        <div className="year-toggle">
          <button
            className={selectedYear === "2025" ? "active" : ""}
            onClick={() => setSelectedYear("2025")}
          >
            2025
          </button>
          <button
            className={selectedYear === "2026" ? "active" : ""}
            onClick={() => setSelectedYear("2026")}
          >
            2026
          </button>
        </div>
      </div>

      {/* Added minWidth: 0 to help with that width(-1) warning */}
      <div style={{ width: "100%", height: 300, minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          {/* FIX: Changed data={data} to data={activeData} */}
          <AreaChart
            data={activeData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eee"
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorBalance)"
              animationDuration={800} // Makes the switch look smooth
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceChart;
