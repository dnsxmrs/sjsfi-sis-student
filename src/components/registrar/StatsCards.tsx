// app/components/registrar/StatsCards.tsx
export default function StatsCards() {
  const stats = [
    { label: "Total Active Students", value: 320 },
    { label: "Pending Registrations", value: 12 },
    { label: "Withdrawal Requests", value: 31 },
    { label: "Active Courses", value: 21 },
  ];

  return (
    <>
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded shadow-sm border border-gray-200"
        >
          <p className="text-sm text-gray-600">{stat.label}</p>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </>
  );
}