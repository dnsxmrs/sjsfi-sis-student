// app/components/registrar/StatsCards.tsx
import { getActiveStudents } from "@/app/_actions/getActiveStudents";
import { getActiveSubjects } from "@/app/_actions/getActiveSubjects";

export default async function StatsCards() {
    // Fetch active students count
    console.log("StatsCards component rendering...");
    const activeStudentsResult = await getActiveStudents();
    console.log("StatsCards received result:", activeStudentsResult);
    const activeStudentCount = activeStudentsResult.success ? activeStudentsResult.count : 0;
    console.log("Final activeStudentCount:", activeStudentCount);

    // Fetch active subjects count
    console.log("Fetching active subjects...");
    const activeSubjectsResult = await getActiveSubjects();
    console.log("StatsCards received subjects result:", activeSubjectsResult);
    const activeSubjectCount = activeSubjectsResult.success ? activeSubjectsResult.count : 0;
    console.log("Final activeSubjectCount:", activeSubjectCount);

    const stats = [
        { label: "Total Active Students", value: activeStudentCount },
        { label: "Pending Registrations", value: 0 },
        { label: "Withdrawal Requests", value: 0 },
        { label: "Active Courses", value: activeSubjectCount },
    ];    return (
        <>
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className="bg-white p-4 rounded shadow-sm border border-gray-200 overflow-hidden"
                >
                    <p className="text-sm text-gray-600 break-words leading-tight mb-1">
                        {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 break-words leading-tight">
                        {stat.value}
                    </p>
                </div>
            ))}
        </>
    );
}