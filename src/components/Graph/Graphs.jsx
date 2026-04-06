import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

// Sample data: use 'value' to show the trend
const data = [
  { day: 'Mon', value: 400 },
  { day: 'Tue', value: 300 },
  { day: 'Wed', value: 500 },
  { day: 'Thu', value: 450 },
  { day: 'Fri', value: 700 }, // Shows an overall increase
];

const Graphs = ({ color }) => {
  return (
    <div style={{ width: '100%', height: 60 }}> {/* Compact height for cards */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip cursor={false} content={() => null} /> {/* Hidden tooltip for cleaner look */}
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            fillOpacity={1} 
            fill="url(#colorValue)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graphs;
