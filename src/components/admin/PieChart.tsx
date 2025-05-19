'use client';

import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Grade 1', value: 25 },
  { name: 'Grade 2', value: 55 },
  { name: 'Grade 3', value: 30 },
  // Add others...
];

const COLORS = [
  '#FF9F1C', '#FF4040', '#2EC4B6', '#3D348B', '#FFBF00',
  '#8D99AE', '#00BFFF', '#A23E48', '#4CAF50', '#7B2CBF'
];

const GradePieChart: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4">
      <ResponsiveContainer width={280} height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Legend block styled separately */}
      <div className="flex flex-wrap justify-center md:flex-col md:justify-start text-sm text-gray-600">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center mr-4 mb-2 md:mb-1">
            <span
              className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradePieChart;
