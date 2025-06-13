import React from 'react';

type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
  subtitleColor?: 'green' | 'red' | 'gray' | 'yellow';
};

const MetricCard: React.FC<Props> = ({ title, value, subtitle, subtitleColor = 'gray' }) => {
  const colorClass = {
    green: 'text-green-500',
    red: 'text-red-500',
    gray: 'text-gray-700',
    yellow: 'text-yellow-500' 
  }[subtitleColor];

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <p className="text-sm text-gray-700">{title}</p>
      <p className="text-xl md:text-2xl font-bold text-gray-700">{value}</p>
      {subtitle && <p className={`text-xs ${colorClass}`}>{subtitle}</p>}
    </div>
  );
};


export default MetricCard;
