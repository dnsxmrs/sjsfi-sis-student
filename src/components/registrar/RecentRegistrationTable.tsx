import React from 'react';

const registrations = [
  { id: "ST12345", name: "Emma Johnson", program: "Computer Science", date: "2023-09-01" },
  { id: "ST12346", name: "Michael Smith", program: "Business Administration", date: "2023-09-01" },
  { id: "ST12347", name: "Sophia Williams", program: "Psychology", date: "2023-09-02" },
  { id: "ST12348", name: "Daniel Brown", program: "Engineering", date: "2023-09-02" },
  { id: "ST12349", name: "Olivia Davis", program: "Medicine", date: "2023-09-03" },
];

export function RecentRegistrationsTable() {
  return (
    <div className="bg-white shadow rounded-md p-4 overflow-x-auto">
      <h3 className="text-md font-medium mb-3 text-gray-700">Recently Registered Students</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-t border-b text-left text-gray-500">
            <th className="px-2 py-1">ID</th>
            <th className="px-2 py-1">Name</th>
            <th className="px-2 py-1">Program</th>
            <th className="px-2 py-1">Date</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((r) => (
            <tr key={r.id} className="text-gray-500 ">
              <td className="px-2 py-3">{r.id}</td>
              <td className="px-2 py-3">{r.name}</td>
              <td className="px-2 py-3">{r.program}</td>
              <td className="px-2 py-3">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}