'use client';

import React from 'react';
import MetricCard from '@/components/admin/MetricCard';
import GradePieChart from '@/components/admin/PieChart';
import SystemLogsTable from '@/components/admin/SystemLogsTable';
import UserIDModal from '@/components/admin/UserIDModal';

const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard title="Total Active Students" value={320} subtitle="+12% vs last school year" subtitleColor="green" />
        <MetricCard title="Tuition and Fees" value="₱105,056.00" subtitle="89.68% students paid" subtitleColor="yellow" />
        <MetricCard title="Total Active Faculty" value={42} subtitle="+3% vs last school year" subtitleColor="green" />
        <MetricCard title="Class per Faculty" value={21} subtitle="-2 vs last school year" subtitleColor="red" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Students per Grade</h3>
          <GradePieChart />
        </div>
        <SystemLogsTable />
      </div>
    </div>
  );
};

export default DashboardPage;
