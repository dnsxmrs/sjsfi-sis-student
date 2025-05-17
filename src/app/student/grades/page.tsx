'use client'

const gradesData = [
    {
        schoolYear: '2023-2024',
        gradeLevel: 'Grade-5',
        subjects: [
            { number: 1, code: 'ENGL 5', desc: 'English 5', faculty: 'Mrs. Maria Santos', g1: 88, g2: 91, g3: 87, g4: 90, final: 89, status: 'P' },
            { number: 2, code: 'MATH 5', desc: 'Mathematics 5', faculty: 'Mr. Joseph Reyes', g1: 92, g2: 90, g3: 93, g4: 91, final: 92, status: 'P' },
            { number: 3, code: 'SCI 5', desc: 'Science 5', faculty: 'Ms. Liza Del Rosario', g1: 85, g2: 86, g3: 88, g4: 87, final: 87, status: 'P' },
            { number: 4, code: 'FILI 5', desc: 'Filipino 5', faculty: 'Mr. Ramon Cruz', g1: 89, g2: 90, g3: 91, g4: 90, final: 90, status: 'P' },
            { number: 5, code: 'AP 5', desc: 'Araling Panlipunan 5', faculty: 'Mrs. Jenny Valdez', g1: 86, g2: 85, g3: 88, g4: 87, final: 87, status: 'P' },
            { number: 6, code: 'EPP 5', desc: 'Edukasyong Pantahanan at Pangkabuhayan 5', faculty: 'Ms. Irene Manalo', g1: 93, g2: 92, g3: 94, g4: 91, final: 93, status: 'P' },
            { number: 7, code: 'ESP 5', desc: 'Edukasyon sa Pagpapakatao 6', faculty: 'Mr. Noel Garcia', g1: 90, g2: 88, g3: 91, g4: 90, final: 90, status: 'P' },
            { number: 8, code: 'MAPEH 5', desc: 'Music, Arts, Physical Education, and Health 5', faculty: 'Ms. Carla De Leon', g1: 87, g2: 89, g3: 88, g4: 92, final: 91, status: 'P' },
        ],
    },
    {
        schoolYear: '2022-2023',
        gradeLevel: 'Grade-4',
        subjects: [], // You can fill this with similar data if needed
    },
];

function GradesTable({ year, grade, subjects }: { year: string; grade: string; subjects: any[] }) {
    return (
        <div className="mb-8">
            <div className="bg-[#800000] text-white px-4 py-2 rounded-t-md font-medium text-lg">
                School Year {year} | {grade}
            </div>
            <div className="bg-white p-4">
                <div className="overflow-x-auto border rounded-b-md">
                    <table className="min-w-[900px] w-full text-base text-left">
                        <thead className="bg-gray-100 sticky top-0 z-10">
                            <tr>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">Number</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">Subject Code</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">Description</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">Faculty</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">1st Grading</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">2nd Grading</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">3rd Grading</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">4th Grading</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">Final Grade</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">Grade Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {subjects.length === 0 ? (
                                <tr>
                                    <td colSpan={10} className="text-center py-4 text-gray-500 border-[0.5px] border-gray-300 bg-white">No data available.</td>
                                </tr>
                            ) : (
                                subjects.map((subj, idx) => (
                                    <tr
                                        key={subj.number}
                                        className={`transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-200`}
                                    >
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">{subj.number}</td>
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">{subj.code}</td>
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">{subj.desc}</td>
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">{subj.faculty}</td>
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">{subj.g1}</td>
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">{subj.g2}</td>
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">{subj.g3}</td>
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">{subj.g4}</td>
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">{subj.final}</td>
                                        <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${subj.status === 'P' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                                aria-label={subj.status === 'P' ? 'Passed' : 'Failed'}
                                                title={subj.status === 'P' ? 'Passed' : 'Failed'}
                                            >
                                                {subj.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default function GradesPage() {
    return (
        <div className="space-y-6">
            {gradesData.map((g) => (
                <GradesTable
                    key={g.schoolYear}
                    year={g.schoolYear}
                    grade={g.gradeLevel}
                    subjects={g.subjects}
                />
            ))}
        </div>
    );
}
