import React from 'react';

const pendingRegistrations = [
  { id: "ST12345", name: "Emma Johnson", program: "Computer Science", status: "Pending" },
  { id: "ST12346", name: "Michael Smith", program: "Business Administration", status: "Pending" },
  { id: "ST12347", name: "Sophia Williams", program: "Psychology", status: "Pending" },
];

export function RecentPendingRegistrations() {
  return (
    <div className="bg-white shadow rounded-md p-4 overflow-x-auto">
      <h3 className="text-md font-medium mb-3 text-gray-700">Recently Pending Students</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-t border-b text-left text-gray-500">
            <th className="px-2 py-1">ID</th>
            <th className="px-2 py-1">Name</th>
            <th className="px-2 py-1">Program</th>
            <th className="px-2 py-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {pendingRegistrations.map((r) => (
            <tr key={r.id} className="text-gray-500">
              <td className="px-2 py-3">{r.id}</td>
              <td className="px-2 py-3">{r.name}</td>
              <td className="px-2 py-3">{r.program}</td>
              <td className="px-2 py-3">{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}