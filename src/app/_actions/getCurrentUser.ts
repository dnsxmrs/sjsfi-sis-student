import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function getCurrentUser() {
    try {
        // Get the current user from Clerk
        const clerkUser = await currentUser();

        if (
            !clerkUser ||
            !clerkUser.emailAddresses ||
            clerkUser.emailAddresses.length === 0
        ) {
            return {
                name: "Guest User",
                studentNo: "N/A",
                schoolYear: "N/A",
                email: "",
                role: "guest",
            };
        }

        const email = clerkUser.emailAddresses[0].emailAddress;

        // Fetch user data from Prisma database using email
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                student: {
                    include: {
                        enrollments: {
                            where: {
                                status: "enrolled",
                            },
                            orderBy: {
                                createdAt: "desc",
                            },
                            take: 1,
                        },
                        grades: {
                            include: {
                                subject: {
                                    include: {
                                        enrollment: true,
                                    },
                                },
                            },
                            orderBy: {
                                createdAt: "desc",
                            },
                            take: 1,
                        },
                    },
                },
            },
        });

        if (!user) {
            return {
                firstName:
                    clerkUser.firstName + " " + clerkUser.lastName ||
                    "Unknown",
                lastName: clerkUser.lastName || "User",
                studentNo: "Not registered",
                schoolYear: "N/A",
                email: email,
                role: "unregistered",
            };
        }

        // Format the response based on user role (case-insensitive)
        if (user.role.toLowerCase() === "student") {
            if (user.student) {
                // Get school year from grades first, then fall back to enrollment
                const schoolYearFromGrades = user.student.grades[0]?.subject?.enrollment?.schoolYear;
                const schoolYearFromEnrollment = user.student.enrollments[0]?.schoolYear;
                const schoolYear = schoolYearFromGrades || schoolYearFromEnrollment || "N/A";

                const result = {
                    firstName: user.firstName,
                    lastName: user.familyName,
                    studentNo: user.student.studentNumber,
                    schoolYear: schoolYear,
                    email: user.email,
                    role: user.role,
                    gradeLevel: user.student.gradeLevel,
                };
                return result;
            } else {
                return {
                    firstName: user.firstName,
                    lastName: user.familyName,
                    studentNo: "Student data not found",
                    schoolYear: "N/A",
                    email: user.email,
                    role: user.role,
                    gradeLevel: "N/A",
                };
            }
        }
    } catch (error) {
        console.error("Error in getCurrentUser:", error);
        // Return fallback values instead of null
        return {
            firstName: "Error Loading User",
            lastName: "N/A",
            studentNo: "N/A",
            schoolYear: "N/A",
            email: "",
            role: "error",
        };
    }
}