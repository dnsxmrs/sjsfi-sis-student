'use client'

import { useEffect, useState } from 'react';
import { GradesSummary, getStudentGrades } from '@/app/_actions/getStudentGrades';
// import toast from 'react-hot-toast';

export function GradesTable() {
    const [gradesData, setGradesData] = useState<GradesSummary | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // const [devToolsOpen, setDevToolsOpen] = useState(false);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                setLoading(true);
                // const data = null
                const data = await getStudentGrades();
                if (data) {
                    setGradesData(data);
                    // Clear any previous errors
                    setError(null);
                } else {
                    setGradesData(null);
                    setError('No grades data found');
                }
            } catch {
                setError('Failed to load grades');
            } finally {
                setLoading(false);
            }
        };

        fetchGrades();
    }, []);

    // // DevTools detection and protection
    // useEffect(() => {
    //     // const devtools = {
    //     //     open: false,
    //     //     orientation: null
    //     // };

    //     // const showDevToolsWarning = () => {
    //     //     setDevToolsOpen(true);
    //     //     toast.error('Developer Tools detected! Access blocked for security.', {
    //     //         duration: 6000,
    //     //         style: {
    //     //             background: '#fef2f2',
    //     //             color: '#dc2626',
    //     //         },
    //     //     });
    //     // };

    //     // // Method 1: Detect DevTools by checking window dimensions
    //     // const devtoolsInterval = setInterval(() => {
    //     //     if (window.outerHeight - window.innerHeight > 200 ||
    //     //         window.outerWidth - window.innerWidth > 200) {
    //     //         if (!devtools.open) {
    //     //             devtools.open = true;
    //     //             showDevToolsWarning();
    //     //         }
    //     //     } else {
    //     //         devtools.open = false;
    //     //         setDevToolsOpen(false);
    //     //     }
    //     // }, 500);

    //     // // Method 2: Detect through console debug
    //     // const debugInterval = setInterval(() => {
    //     //     const before = new Date();
    //     //     debugger;
    //     //     const after = new Date();
    //     //     if (after.getTime() - before.getTime() > 100) {
    //     //         if (!devtools.open) {
    //     //             devtools.open = true;
    //     //             showDevToolsWarning();
    //     //         }
    //     //     }
    //     // }, 1000);

    //     // // Method 3: Console monitoring
    //     // const originalLog = console.log;
    //     // const originalWarn = console.warn;
    //     // const originalError = console.error;
    //     // console.log = function(...args) {
    //     //     showDevToolsWarning();
    //     //     return originalLog.apply(console, args);
    //     // };
    //     // console.warn = function(...args) {
    //     //     showDevToolsWarning();
    //     //     return originalWarn.apply(console, args);
    //     // };
    //     // console.error = function(...args) {
    //     //     showDevToolsWarning();
    //     //     return originalError.apply(console, args);
    //     // };

    //     // return () => {
    //     //     clearInterval(devtoolsInterval);
    //     //     clearInterval(debugInterval);
    //     //     console.log = originalLog;
    //     //     console.warn = originalWarn;
    //     //     console.error = originalError;
    //     // };
    // }, []);    // Print protection

    // useEffect(() => {
    //     const showPrintWarning = () => {
    //         toast.error('Printing is not allowed for this content!', {
    //             duration: 4000,
    //             style: {
    //                 background: '#fee2e2',
    //                 color: '#dc2626',
    //             },
    //         });
    //     };

    //     const showDevToolsWarning = () => {
    //         setDevToolsOpen(true);
    //         toast.error('Developer Tools detected! Access blocked for security.', {
    //             duration: 6000,
    //             style: {
    //                 background: '#fef2f2',
    //                 color: '#dc2626',
    //             },
    //         });
    //     };// Detect keyboard shortcuts (Ctrl+P, Cmd+P, F12, Ctrl+Shift+I, etc.)
    //     const handleKeyDown = (e: KeyboardEvent) => {
    //         // Block print shortcuts
    //         if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
    //             e.preventDefault();
    //             e.stopPropagation();
    //             showPrintWarning();
    //             return false;
    //         }

    //         // Block DevTools shortcuts
    //         if (
    //             e.key === 'F12' ||                                    // F12
    //             (e.ctrlKey && e.shiftKey && e.key === 'I') ||        // Ctrl+Shift+I
    //             (e.ctrlKey && e.shiftKey && e.key === 'J') ||        // Ctrl+Shift+J
    //             (e.ctrlKey && e.shiftKey && e.key === 'C') ||        // Ctrl+Shift+C
    //             (e.ctrlKey && e.key === 'U') ||                      // Ctrl+U (View Source)
    //             (e.ctrlKey && e.key === 'S') ||                      // Ctrl+S (Save)
    //             (e.metaKey && e.altKey && e.key === 'I') ||          // Cmd+Option+I (Mac)
    //             (e.metaKey && e.altKey && e.key === 'J') ||          // Cmd+Option+J (Mac)
    //             (e.metaKey && e.altKey && e.key === 'C')             // Cmd+Option+C (Mac)
    //         ) {
    //             e.preventDefault();
    //             e.stopPropagation();
    //             showDevToolsWarning();
    //             toast.error('Keyboard shortcut blocked for security!', {
    //                 duration: 3000,
    //                 style: {
    //                     background: '#fef2f2',
    //                     color: '#dc2626',
    //                 },
    //             });
    //             return false;
    //         }
    //     };

    //     // Detect browser print events
    //     const handleBeforePrint = () => {
    //         showPrintWarning();
    //         // Hide the content during print
    //         document.body.style.visibility = 'hidden';
    //     };

    //     const handleAfterPrint = () => {
    //         // Restore visibility after attempted print
    //         document.body.style.visibility = 'visible';
    //     };

    //     // Disable right-click context menu
    //     const handleContextMenu = (e: MouseEvent) => {
    //         e.preventDefault();
    //         toast.error('Right-click is disabled on this page!', {
    //             duration: 3000,
    //             style: {
    //                 background: '#fee2e2',
    //                 color: '#dc2626',
    //             },
    //         });
    //         return false;
    //     };

    //     // Add event listeners
    //     document.addEventListener('keydown', handleKeyDown);
    //     window.addEventListener('beforeprint', handleBeforePrint);
    //     window.addEventListener('afterprint', handleAfterPrint);
    //     document.addEventListener('contextmenu', handleContextMenu);

    //     // Additional protection: Disable common browser features
    //     document.addEventListener('selectstart', (e) => e.preventDefault());
    //     document.addEventListener('dragstart', (e) => e.preventDefault());

    //     // Prevent saving page
    //     document.addEventListener('keydown', (e) => {
    //         if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    //             e.preventDefault();
    //             toast.error('🚫 Saving is not allowed!', {
    //                 duration: 3000,
    //                 style: { background: '#fee2e2', color: '#dc2626' }
    //             });
    //         }
    //     });        // Monitor for DevTools using element inspection trick  
    //     const element = new Image();
    //     let devtoolsOpen = false;
    //     Object.defineProperty(element, 'id', {
    //         get: function () {
    //             if (!devtoolsOpen) {
    //                 devtoolsOpen = true;
    //                 showDevToolsWarning();
    //             }
    //             return 'devtools-detector';
    //         }
    //     });

    //     // Console inspection detection
    //     setInterval(() => {
    //         console.log('%c', element);
    //     }, 1000);

    //     // Cleanup
    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown);
    //         window.removeEventListener('beforeprint', handleBeforePrint);
    //         window.removeEventListener('afterprint', handleAfterPrint);
    //         document.removeEventListener('contextmenu', handleContextMenu);
    //     };
    // }, []);

    return (
        <>
            {/* DevTools Warning Overlay */}
            {/* {devToolsOpen && (
                <div className="fixed inset-0 bg-red-900 bg-opacity-95 flex items-center justify-center z-[9999]">
                    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md text-center border-4 border-red-600">
                        <div className="text-6xl mb-4">🚨</div>
                        <h2 className="text-2xl font-bold text-red-600 mb-4">SECURITY ALERT</h2>
                        <p className="text-gray-800 mb-4">
                            Developer Tools have been detected! This content is protected and access is restricted for security purposes.
                        </p>
                        <p className="text-sm text-gray-600 mb-6">
                            Please close the developer tools and refresh the page to continue.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            )} */}

            {/* Print protection styles */}
            <style jsx>{`
                @media print {
                    * {
                        visibility: hidden !important;
                        display: none !important;
                    }
                    body::before {
                        content: "⚠️ PRINTING IS NOT ALLOWED FOR THIS CONTENT ⚠️" !important;
                        position: fixed !important;
                        top: 50% !important;
                        left: 50% !important;
                        transform: translate(-50%, -50%) !important;
                        font-size: 24px !important;
                        font-weight: bold !important;
                        color: red !important;
                        z-index: 9999 !important;
                        visibility: visible !important;
                        display: block !important;
                    }
                }
                
                /* Additional protection against screenshots */
                .grades-container {
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    -webkit-touch-callout: none;
                    -webkit-tap-highlight-color: transparent;
                }
                  /* Disable drag and drop */
                .grades-container * {
                    -webkit-user-drag: none;
                    -khtml-user-drag: none;
                    -moz-user-drag: none;
                    -o-user-drag: none;
                    user-drag: none;
                }
                
                /* Hide content when DevTools are open */
                .devtools-open {
                    filter: blur(10px);
                    pointer-events: none;
                    opacity: 0.3;
                }
            `}</style>

            {/* <div className={`mb-8 grades-container ${devToolsOpen ? 'devtools-open' : ''}`} */}
            <div className={`mb-8 grades-container`}
                onDragStart={(e) => e.preventDefault()}>
                {/* Show "No grades yet" card when there are no grades */}
                {!loading && !error && gradesData && gradesData.grades.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
                        {/* <div className="text-6xl mb-4">📊</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">No Grades Yet</h3>
                        <div className="text-sm text-gray-600 mb-4">
                            <p><strong>{gradesData.studentInfo.firstName} {gradesData.studentInfo.lastName}</strong></p>
                            <p>{gradesData.studentInfo.studentNumber} | Grade {gradesData.studentInfo.gradeLevel}</p>
                        </div> */}
                        <p className="text-gray-600 mb-4">
                            Your grades haven&apos;t been uploaded yet. Please check back later or contact your instructor.
                        </p>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <p className="text-sm text-red-800">
                                <strong>Note:</strong> Grades are typically available after the grading period ends and have been processed by the registrar.
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="bg-[#800000] text-white px-4 py-2 rounded-t-md font-medium text-lg">
                            {gradesData ? `${gradesData.studentInfo.gradeLevel} | ${gradesData.studentInfo.schoolYear !== 'N/A' ? gradesData.studentInfo.schoolYear : 'Current School Year'}` : 'No grade level | No school year'}
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
                    </>
                )}
            </div>
        </>
    );
}
