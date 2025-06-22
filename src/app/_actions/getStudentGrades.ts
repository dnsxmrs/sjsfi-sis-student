'use server'

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

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
}

export async function getStudentGrades(): Promise<GradesSummary | null> {
    try {
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
        console.log("Fetching grades for user with email:", email);        // First, get the user and student information
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
                                        lastName: true,
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
                lastName: user.lastName,
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
                    teacher: grade.subject.teacher,
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
        };

        return result;

    } catch (error) {
        console.error("Error fetching student grades:", error);
        return null;
    }
}
