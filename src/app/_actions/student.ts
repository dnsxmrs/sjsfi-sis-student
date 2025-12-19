

"use server";

import { prisma } from "@/lib/prisma";

export async function getStudents() {
    try {
        console.log("Fetching students from database...");

        // Fetch students with their user information and related registration data
        const students = await prisma.student.findMany({
            where: {
                deletedAt: null, // Only non-deleted students
            },
            include: {
                user: {
                    select: {
                        firstName: true,
                        familyName: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc", // Most recent first
            },
        });

        console.log("Students fetched successfully:", students.length);

        // For each student, get their registration data
        const studentsWithRegistration = await Promise.all(
            students.map(async (student) => {
                const registration = await prisma.registration.findFirst({
                    where: {
                        studentNo: student.studentNumber,
                        deletedAt: null,
                    },
                    include: {
                        yearLevel: true,
                        schoolYear: true,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                });

                return {
                    ...student,
                    registration,
                };
            })
        );

        // Transform the data to match the expected format
        const formattedStudents = studentsWithRegistration.map((student) => {
            const gradeLevel = student.registration?.yearLevel?.name || "N/A";

            return {
                id: student.studentNumber,
                firstName: student.user.firstName,
                lastName: student.user.familyName,
                gradeLevel: gradeLevel,
                strand:
                    gradeLevel.includes("11") ||
                        gradeLevel.includes("12")
                        ? "Senior High"
                        : "Junior High",
                status: student.registration?.status || "N/A",
                email: student.user.email,
                schoolYear: student.registration?.schoolYear?.year || "N/A",
            };
        });

        console.log("Formatted students:", formattedStudents);

        return {
            success: true,
            students: formattedStudents,
        };
    } catch (error) {
        console.error("Error fetching students:", error);
        return {
            success: false,
            students: [],
            error: "Failed to fetch students",
        };
    }
}
