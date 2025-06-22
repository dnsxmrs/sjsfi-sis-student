'use client'

import { useEffect, useState } from 'react';
import { GradesSummary, getStudentGrades } from '@/app/_actions/getStudentGrades';

export function GradesTable() {
    const [gradesData, setGradesData] = useState<GradesSummary | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                setLoading(true);
                // const data = null
                const data = await getStudentGrades();
                if (data) {
                    setGradesData(data);
                } else {
                    setError('No grades data found');
                }
            } catch (err) {
                setError('Failed to load grades');
                console.error('Error fetching grades:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchGrades();
    }, []);

    return (
        <div className="mb-8">
            <div className="bg-[#800000] text-white px-4 py-2 rounded-t-md font-medium text-lg">
                {gradesData ? `${gradesData.studentInfo.gradeLevel} | ${gradesData.studentInfo.schoolYear}` : 'No grade level | No school year'}
            </div>
            <div className="bg-white p-4 relative">
                {/* Anti-screenshot overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-5 transition-opacity duration-300">
                    <div className="w-full h-full bg-gradient-to-r from-red-500 to-blue-500 mix-blend-difference"></div>
                </div>

                <div className="overflow-x-auto border rounded-b-md">
                    <table className="min-w-[900px] w-full text-base text-left">
                        <thead className="bg-gray-100 sticky top-0 z-10">
                            <tr>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">Subject Code</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">Subject</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">Faculty</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">School Year</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">1st Grading</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">2nd Grading</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">3rd Grading</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">4th Grading</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900 text-right">Final Grade</th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300 font-medium text-xs text-gray-900">Grade Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {loading ? (
                                <tr>
                                    <td colSpan={10} className="text-center py-4 text-gray-500 border-[0.5px] border-gray-300 bg-white">
                                        Loading grades...
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={10} className="text-center py-4 text-red-500 border-[0.5px] border-gray-300 bg-white">
                                        {error}
                                    </td>
                                </tr>
                            ) : !gradesData || gradesData.grades.length === 0 ? (
                                <tr>
                                    <td colSpan={10} className="text-center py-4 text-gray-500 border-[0.5px] border-gray-300 bg-white">
                                        No grades available.
                                    </td>
                                </tr>
                            ) : (
                                gradesData.grades.map((grade, idx) => {
                                    return (
                                        <tr key={grade.id} className={`transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-200`}>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">
                                                {grade.subject.name.toUpperCase()}
                                            </td>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">
                                                {grade.subject.name}
                                            </td>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">
                                                {`${grade.subject.teacher.user.firstName} ${grade.subject.teacher.user.lastName}`}
                                            </td>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">
                                                {grade.subject.schoolYear}
                                            </td>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">
                                                {grade.firstGrading > 0 ? grade.firstGrading : '-'}
                                            </td>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">
                                                {grade.secondGrading > 0 ? grade.secondGrading : '-'}
                                            </td>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">
                                                {grade.thirdGrading > 0 ? grade.thirdGrading : '-'}
                                            </td>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">
                                                {grade.fourthGrading > 0 ? grade.fourthGrading : '-'}
                                            </td>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs text-right">
                                                {grade.finalGrade > 0 ? grade.finalGrade : '-'}
                                            </td>
                                            <td className="px-2 py-2 border-[0.5px] border-gray-300 text-xs">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${grade.remarks === 'Passed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : grade.remarks === 'Failed'
                                                            ? 'bg-red-100 text-red-800'
                                                            : 'bg-yellow-100 text-yellow-800'
                                                        }`}
                                                    aria-label={
                                                        grade.remarks === 'Passed'
                                                            ? 'Passed'
                                                            : grade.remarks === 'Failed'
                                                                ? 'Failed'
                                                                : 'Incomplete'
                                                    }
                                                    title={
                                                        grade.remarks === 'Passed'
                                                            ? 'Passed'
                                                            : grade.remarks === 'Failed'
                                                                ? 'Failed'
                                                                : 'Incomplete'
                                                    }
                                                >
                                                    {grade.remarks}
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
