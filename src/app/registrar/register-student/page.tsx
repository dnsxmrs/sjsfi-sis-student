'use client';

import React, { useState } from 'react';

const RegisterCoursePage: React.FC = () => {
  const [studentID, setStudentID] = useState('');
  const [fullName, setFullName] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [strand, setStrand] = useState('');
  const [email, setEmail] = useState('');
  const [requirements, setRequirements] = useState({
    birthCertificate: false,
    reportCard: false,
    certificateOfGoodMoral: false,
  });

  const handleRequirementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequirements({
      ...requirements,
      [e.target.name]: e.target.checked,
    });
  };

  const handleRegister = () => {
    // Placeholder for register student logic
    alert('Register Student clicked');
  };

  const handleNotify = () => {
    // Placeholder for notify missing requirements logic
    alert('Notify Missing Requirements clicked');
  };

  const students = [
    {
      id: 'JHS2023-001',
      name: 'Styvn Bertuso',
      gradeLevel: 'Grade 7',
      strand: '-',
      status: 'Pending',
    },
    {
      id: 'SHS2023-001',
      name: 'Gerard Marical',
      gradeLevel: 'Grade 11',
      strand: 'STEM',
      status: 'Complete',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
        <aside className="w-full md:w-56 space-y-4 flex-shrink-0 order-1 md:order-2">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col space-y-3">
            <label className="block text-sm font-medium text-black px-3">
              Quick Access Buttons
            </label>
            <button className="bg-red-800 text-white py-2 rounded text-sm hover:bg-red-900">
              Student Application Form
            </button>
            <button className="bg-red-800 text-white py-2 rounded text-sm hover:bg-red-900">
              Registration Form
            </button>
          </div>
        </aside>
        {/* First Column: Add Student Form + All Students Table */}
        <div className="flex-1 space-y-6 order-2 md:order-1">
          {/* Add Student Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-black">Add Student</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="studentID">
                  Student ID
                </label>
                <input
                  id="studentID"
                  type="text"
                  placeholder="Enter student ID"
                  value={studentID}
                  onChange={(e) => setStudentID(e.target.value)}
                  className="w-full text-black border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-black border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="gradeLevel">
                  Grade Level
                </label>
                <select
                  id="gradeLevel"
                  value={gradeLevel}
                  onChange={(e) => setGradeLevel(e.target.value)}
                  className="w-full text-black border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-xs"
                >
                  <option value="">Select grade level</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-black" htmlFor="strand">
                  Strand
                </label>
                <select
                  id="strand"
                  value={strand}
                  onChange={(e) => setStrand(e.target.value)}
                  className="w-full text-black border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-xs"
                >
                  <option value="">Select strand</option>
                  <option value="STEM">STEM</option>
                  <option value="ABM">ABM</option>
                  <option value="HUMSS">HUMSS</option>
                  <option value="GAS">GAS</option>
                  <option value="TVL">TVL</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <span className="block text-sm font-medium mb-2 text-black">Requirements</span>
              <div className="flex flex-col space-y-1">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="birthCertificate"
                    checked={requirements.birthCertificate}
                    onChange={handleRequirementChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2 text-sm text-black">Birth Certificate</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="reportCard"
                    checked={requirements.reportCard}
                    onChange={handleRequirementChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2 text-sm text-black">Report Card</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="certificateOfGoodMoral"
                    checked={requirements.certificateOfGoodMoral}
                    onChange={handleRequirementChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2 text-sm text-black">Certificate of Good Moral</span>
                </label>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleRegister}
                className="bg-red-800 text-white px-4 py-2 rounded text-sm flex items-center space-x-2 hover:bg-red-900"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Register Student</span>
              </button>
              <button
                onClick={handleNotify}
                className="bg-yellow-400 text-black px-4 py-2 rounded text-sm flex items-center space-x-2 hover:bg-yellow-500"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Notify Missing Requirements</span>
              </button>
            </div>
          </div>
          {/* All Students Table */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-black">All Students</h2>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-300 text-black">
                  <th className="py-2 font-semibold">Student ID</th>
                  <th className="py-2 font-semibold">Name</th>
                  <th className="py-2 font-semibold">Grade Level</th>
                  <th className="py-2 font-semibold">Strand</th>
                  <th className="py-2 font-semibold">Status</th>
                  <th className="py-2 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-gray-200 text-black">
                    <td className="py-2">{student.id}</td>
                    <td className="py-2">{student.name}</td>
                    <td className="py-2">{student.gradeLevel}</td>
                    <td className="py-2">{student.strand}</td>
                    <td className="py-2">
                      {student.status === 'Pending' ? (
                        <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                          Pending
                        </span>
                      ) : (
                        <span className="inline-block bg-green-200 text-green-700 px-2 py-1 rounded-full text-xs">
                          Complete
                        </span>
                      )}
                    </td>
                    <td className="py-2 flex space-x-4">
                      <button
                        title="View"
                        className="text-gray-700 hover:text-gray-900"
                        onClick={() => alert(`View student ${student.id}`)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                      <button
                        title="Delete"
                        className="text-red-600 hover:text-red-800"
                        onClick={() => alert(`Delete student ${student.id}`)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCoursePage;
