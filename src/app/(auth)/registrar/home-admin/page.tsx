'use client';

import React from 'react';
import MetricCard from '@/components/admin/MetricCard';
import GradePieChart from '@/components/admin/PieChart';
import SystemLogsTable from '@/components/admin/SystemLogsTable';

const DashboardPage = () => {
  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Metrics Grid - Responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <MetricCard title="Total Active Students" value={320} subtitle="+12% vs last school year" subtitleColor="green" />
        <MetricCard title="Tuition and Fees" value="₱105,056.00" subtitle="89.68% students paid" subtitleColor="yellow" />
        <MetricCard title="Total Active Faculty" value={42} subtitle="+3% vs last school year" subtitleColor="green" />
        <MetricCard title="Class per Faculty" value={21} subtitle="-2 vs last school year" subtitleColor="red" />
      </div>
      
      {/* Charts and Tables Grid - Stack on mobile, side by side on larger screens */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl shadow-md p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-600">Students per Grade</h3>
          <div className="w-full overflow-hidden">
            <GradePieChart />
          </div>
        </div>
        <SystemLogsTable />
      </div>
    </div>
  );
};

export default DashboardPage;
