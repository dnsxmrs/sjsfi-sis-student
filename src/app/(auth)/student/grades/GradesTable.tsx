'use client'

import { Subject } from './types';
import { useEffect, useRef } from 'react';

interface GradesTableProps {
    year: string;
    grade: string;
    subjects: Subject[];
}

export function GradesTable({ year, grade, subjects }: GradesTableProps) {
    const tableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Add additional protection for the table
        const preventCopy = (e: ClipboardEvent) => {
            e.preventDefault();
            e.clipboardData?.setData('text/plain', 'Copying grades is not allowed. Please visit the registrar for official documents.');
            return false;
        };

        // Protect against image capture attempts
        const preventCapture = () => {
            if (tableRef.current) {
                // Temporarily blur content
                tableRef.current.style.filter = 'blur(5px)';
                setTimeout(() => {
                    if (tableRef.current) {
                        tableRef.current.style.filter = 'none';
                    }
                }, 1000);
            }
        };

        document.addEventListener('copy', preventCopy);
        document.addEventListener('keyup', (e) => {
            if (e.key === 'PrintScreen') {
                preventCapture();
            }
        });

        return () => {
            document.removeEventListener('copy', preventCopy);
        };
    }, []);

    return (
        <div className="mb-8" ref={tableRef}>
            <div className="bg-[#800000] text-white px-4 py-2 rounded-t-md font-medium text-lg">
                School Year {year} | {grade}
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