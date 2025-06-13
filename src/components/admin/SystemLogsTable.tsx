import React from 'react';

const logs = [
  { id: '0022', time: '2025-04-06 14:56:59', action: 'Reset password request', status: 'Success' },
  { id: '0021', time: '2025-04-06 14:55:08', action: 'Failed login attempt', status: 'Failed' },
  // Add others...
];

const SystemLogsTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-600">Recent System Activities</h3>
      <div className="ms-6 me-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b text-gray-500">
              <th>Log Number</th>
              <th>Timestamp</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id} className="border-bs">
                <td className="text-gray-400 py-2">{log.id}</td>
                <td className="text-gray-400 py-2">{log.time}</td>
                <td className="text-gray-400 py-2">{log.action}</td>
                <td className={log.status === 'Success' ? 'text-green-500' : 'text-red-500'}>{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemLogsTable;
