'use client'

import { CheckIcon } from 'lucide-react';

export default function RequestPage() {
    // Hardcoded user info for demo; replace with real data as needed
    const user = {
        name: 'Marial, Erice Michael Dionisio',
        studentNo: '2022-00304-CM-0',
        schoolYear: '2024-2025',
    };

    const handleDownload = async () => {
        const jsPDF = (await import('jspdf')).default;
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text('Certificate of Enrollment', 20, 20);
        doc.setFontSize(12);
        doc.text(`This is to certify that`, 20, 40);
        doc.setFont('helvetica', 'bold');
        doc.text(user.name, 20, 50);
        doc.setFont('helvetica', 'normal');
        doc.text(`(${user.studentNo})`, 20, 58);
        doc.text('is officially enrolled for', 20, 70);
        doc.text(`School Year ${user.schoolYear}`, 20, 78);
        doc.text('Issued by: SJSFI Registrar', 20, 100);
        doc.save(`Certificate_of_Enrollment_${user.name.replace(/\s+/g, '_')}.pdf`);
    };

    return (
        <div className="bg-white border rounded-lg p-4">
            {/* make the div below have border radius and shadow */}
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow">
                <div className="w-full mb-6">
                    {/* make the div velow brder radius the top left and top right  */}
                    <div className="h-5 bg-green-400" style={{ width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                </div>
                <div className="flex flex-col items-center">
                    {/* import a check icon inside the span below */}
                    <span className="text-4xl mb-2">
                        <CheckIcon className="w-10 h-10 text-[#800000]" />
                    </span>
                    <span className="text-lg font-medium text-gray-800">You are officially enrolled.</span>
                    <span className="text-xs text-gray-500 mt-1">(School Year {user.schoolYear})</span>
                </div>
                <button
                    onClick={handleDownload}
                    className="mt-6 flex items-center gap-2 bg-[#800000] hover:bg-[#a1001f] text-white px-5 py-2 rounded transition-colors text-sm font-medium shadow mb-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75V6.75a3 3 0 1 1 6 0v6m-9 4.5h12m-6 0v3" />
                    </svg>
                    Certificate of Enrollment
                </button>
            </div>
        </div   >

    );
}
