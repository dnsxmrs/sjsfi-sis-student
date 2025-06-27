'use server'

// import { currentUser } from "@clerk/nextjs/server";
// import { prisma } from "@/lib/prisma";

export interface StudentGrade {
    id: number;
    subject: {
        id: number;
        name: string;
        description?: string | null;
        gradeLevel: string;
        schoolYear: string; // Added school year from enrollment
        teacher: {
            id: number;
            user: {
                firstName: string;
                lastName: string;
            };
        };
    };
    firstGrading: number;
    secondGrading: number;
    thirdGrading: number;
    fourthGrading: number;
    finalGrade: number;
    remarks?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface GradesSummary {
    studentInfo: {
        firstName: string;
        lastName: string;
        studentNumber: string;
        gradeLevel: string;
        schoolYear: string; // Added school year
    };
    grades: StudentGrade[];
    quarterAverages: {
        firstGrading: number;
        secondGrading: number;
        thirdGrading: number;
        fourthGrading: number;
    };
    overallAverage: number;
    academicExcellenceAward: string;
}

// Function to calculate Academic Excellence Award based on overall average
function calculateAcademicExcellenceAward(overallAverage: number): string {
    if (overallAverage >= 98) {
        return "With Highest Honors";
    } else if (overallAverage >= 95) {
        return "With High Honors";
    } else if (overallAverage >= 90) {
        return "With Honors";
    } else {
        return "None";
    }
}

// Mock data for development and testing
const mockGradesData: GradesSummary = {
    studentInfo: {
        firstName: "Juan",
        lastName: "Cruz",
        studentNumber: "2024-00001",
        gradeLevel: "Grade 10",
        schoolYear: "2024-2025"
    },
    grades: [
        {
            id: 1,
            subject: {
                id: 1,
                name: "Mathematics",
                description: "Advanced Mathematics for Grade 10",
                gradeLevel: "Grade 10",
                schoolYear: "2024-2025",
                teacher: {
                    id: 1,
                    user: {
                        firstName: "Maria",
                        lastName: "Santos"
                    }
                }
            },
            firstGrading: 88,
            secondGrading: 92,
            thirdGrading: 85,
            fourthGrading: 90,
            finalGrade: 89,
            remarks: "Passed",
            createdAt: new Date("2024-06-01"),
            updatedAt: new Date("2024-06-15")
        },
        {
            id: 2,
            subject: {
                id: 2,
                name: "English",
                description: "English Language and Literature",
                gradeLevel: "Grade 10",
                schoolYear: "2024-2025",
                teacher: {
                    id: 2,
                    user: {
                        firstName: "Robert",
                        lastName: "Johnson"
                    }
                }
            },
            firstGrading: 91,
            secondGrading: 89,
            thirdGrading: 93,
            fourthGrading: 87,
            finalGrade: 90,
            remarks: "Passed",
            createdAt: new Date("2024-06-01"),
            updatedAt: new Date("2024-06-15")
        },
        {
            id: 3,
            subject: {
                id: 3,
                name: "Science",
                description: "Integrated Science",
                gradeLevel: "Grade 10",
                schoolYear: "2024-2025",
                teacher: {
                    id: 3,
                    user: {
                        firstName: "Dr. Ana",
                        lastName: "Reyes"
                    }
                }
            },
            firstGrading: 85,
            secondGrading: 88,
            thirdGrading: 91,
            fourthGrading: 89,
            finalGrade: 88,
            remarks: "Passed",
            createdAt: new Date("2024-06-01"),
            updatedAt: new Date("2024-06-15")
        },
        {
            id: 4,
            subject: {
                id: 4,
                name: "Filipino",
                description: "Wikang Filipino",
                gradeLevel: "Grade 10",
                schoolYear: "2024-2025",
                teacher: {
                    id: 4,
                    user: {
                        firstName: "Luz",
                        lastName: "Garcia"
                    }
                }
            },
            firstGrading: 94,
            secondGrading: 92,
            thirdGrading: 96,
            fourthGrading: 93,
            finalGrade: 94,
            remarks: "Passed",
            createdAt: new Date("2024-06-01"),
            updatedAt: new Date("2024-06-15")
        },
        {
            id: 5,
            subject: {
                id: 5,
                name: "Social Studies",
                description: "Araling Panlipunan",
                gradeLevel: "Grade 10",
                schoolYear: "2024-2025",
                teacher: {
                    id: 5,
                    user: {
                        firstName: "Carlos",
                        lastName: "Mendoza"
                    }
                }
            },
            firstGrading: 86,
            secondGrading: 84,
            thirdGrading: 88,
            fourthGrading: 87,
            finalGrade: 86,
            remarks: "Passed",
            createdAt: new Date("2024-06-01"),
            updatedAt: new Date("2024-06-15")
        },
        {
            id: 6,
            subject: {
                id: 6,
                name: "Physical Education",
                description: "Health and Physical Education",
                gradeLevel: "Grade 10",
                schoolYear: "2024-2025",
                teacher: {
                    id: 6,
                    user: {
                        firstName: "Mark",
                        lastName: "Torres"
                    }
                }
            },
            firstGrading: 95,
            secondGrading: 94,
            thirdGrading: 96,
            fourthGrading: 95,
            finalGrade: 95,
            remarks: "Passed",
            createdAt: new Date("2024-06-01"),
            updatedAt: new Date("2024-06-15")
        },
        {
            id: 7,
            subject: {
                id: 7,
                name: "Computer Programming",
                description: "Introduction to Programming",
                gradeLevel: "Grade 10",
                schoolYear: "2024-2025",
                teacher: {
                    id: 7,
                    user: {
                        firstName: "Sofia",
                        lastName: "Villanueva"
                    }
                }
            },
            firstGrading: 92,
            secondGrading: 90,
            thirdGrading: 94,
            fourthGrading: 91,
            finalGrade: 92,
            remarks: "Passed",
            createdAt: new Date("2024-06-01"),
            updatedAt: new Date("2024-06-15")
        },
        {
            id: 8,
            subject: {
                id: 8,
                name: "Arts",
                description: "Visual Arts and Music",
                gradeLevel: "Grade 10",
                schoolYear: "2024-2025",
                teacher: {
                    id: 8,
                    user: {
                        firstName: "Isabella",
                        lastName: "Rivera"
                    }
                }
            },
            firstGrading: 89,
            secondGrading: 91,
            thirdGrading: 87,
            fourthGrading: 90,
            finalGrade: 89,
            remarks: "Passed",
            createdAt: new Date("2024-06-01"),
            updatedAt: new Date("2024-06-15")
        }
    ],
    quarterAverages: {
        firstGrading: 90.0,
        secondGrading: 90.0,
        thirdGrading: 91.25,
        fourthGrading: 90.25
    },
    overallAverage: 90.38,
    academicExcellenceAward: calculateAcademicExcellenceAward(90.38)
};

export async function getStudentGrades(): Promise<GradesSummary | null> {
    try {
        // Return mock data for development/testing
        console.log("Returning mock grades data");
        return mockGradesData;

        // Commented out database logic - uncomment when ready to use real data
        /*
        // Get the current user from Clerk
        const clerkUser = await currentUser();

        if (
            !clerkUser ||
            !clerkUser.emailAddresses ||
            clerkUser.emailAddresses.length === 0
        ) {
            console.log("No Clerk user or email found");
            return null;
        }

        const email = clerkUser.emailAddresses[0].emailAddress;
        console.log("Fetching grades for user with email:", email);

        // First, get the user and student information
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                student: true,
            },
        });

        if (!user || !user.student) {
            console.log("User not found or not a student:", email);
            return null;
        }

        // Fetch all grades for the student with subject information
        const grades = await prisma.grade.findMany({
            where: {
                studentId: user.student.id,
                deletedAt: null, // Only get non-deleted grades
            },
            include: {
                subject: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        gradeLevel: true,
                        enrollment: {
                            select: {
                                schoolYear: true,
                            },
                        },
                        teacher: {
                            select: {
                                id: true,
                                user: {
                                    select: {
                                        firstName: true,
                                        familyName: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: {
                subject: { name: 'asc' },
            },
        });

        console.log(`Found ${grades.length} grades for student ${user.student.studentNumber}`);

        // Calculate quarter averages
        let firstGradingSum = 0, secondGradingSum = 0, thirdGradingSum = 0, fourthGradingSum = 0;
        let firstCount = 0, secondCount = 0, thirdCount = 0, fourthCount = 0;

        grades.forEach(grade => {
            if (grade.firstGrading > 0) {
                firstGradingSum += grade.firstGrading;
                firstCount++;
            }
            if (grade.secondGrading > 0) {
                secondGradingSum += grade.secondGrading;
                secondCount++;
            }
            if (grade.thirdGrading > 0) {
                thirdGradingSum += grade.thirdGrading;
                thirdCount++;
            }
            if (grade.fourthGrading > 0) {
                fourthGradingSum += grade.fourthGrading;
                fourthCount++;
            }
        });

        const quarterAverages = {
            firstGrading: firstCount > 0 ? Math.round((firstGradingSum / firstCount) * 100) / 100 : 0,
            secondGrading: secondCount > 0 ? Math.round((secondGradingSum / secondCount) * 100) / 100 : 0,
            thirdGrading: thirdCount > 0 ? Math.round((thirdGradingSum / thirdCount) * 100) / 100 : 0,
            fourthGrading: fourthCount > 0 ? Math.round((fourthGradingSum / fourthCount) * 100) / 100 : 0,
        };

        // Calculate overall average from final grades
        const finalGrades = grades.map(g => g.finalGrade).filter(grade => grade > 0);
        const overallAverage = finalGrades.length > 0
            ? Math.round((finalGrades.reduce((sum, grade) => sum + grade, 0) / finalGrades.length) * 100) / 100
            : 0;

        const result: GradesSummary = {
            studentInfo: {
                firstName: user.firstName,
                lastName: user.familyName,
                studentNumber: user.student.studentNumber,
                gradeLevel: user.student.gradeLevel,
                schoolYear: grades.length > 0 ? grades[0].subject.enrollment.schoolYear : "N/A",
            },
            grades: grades.map(grade => ({
                id: grade.id,
                subject: {
                    id: grade.subject.id,
                    name: grade.subject.name,
                    description: grade.subject.description,
                    gradeLevel: grade.subject.gradeLevel,
                    schoolYear: grade.subject.enrollment.schoolYear,
                    teacher: {
                        id: grade.subject.teacher.id,
                        user: {
                            firstName: grade.subject.teacher.user.firstName,
                            lastName: grade.subject.teacher.user.familyName,
                        },
                    },
                },
                firstGrading: grade.firstGrading,
                secondGrading: grade.secondGrading,
                thirdGrading: grade.thirdGrading,
                fourthGrading: grade.fourthGrading,
                finalGrade: grade.finalGrade,
                remarks: grade.remarks,
                createdAt: grade.createdAt,
                updatedAt: grade.updatedAt,
            })),
            quarterAverages,
            overallAverage,
            academicExcellenceAward: calculateAcademicExcellenceAward(overallAverage)
        };

        // console the result
        console.log("Grades fetched successfully:", result);

        return result;
        */

    } catch (error) {
        console.error("Error fetching student grades:", error);
        return null;
    }
}
