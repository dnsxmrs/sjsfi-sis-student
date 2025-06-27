import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function getCurrentUser() {
    try {
        // Get the current user from Clerk
        const clerkUser = await currentUser();
        console.log("Clerk User:", clerkUser);

        if (
            !clerkUser ||
            !clerkUser.emailAddresses ||
            clerkUser.emailAddresses.length === 0
        ) {
            console.log("No Clerk user or email found");
            return {
                firstName: "Guest User",
                lastName: "N/A",
                studentNo: "N/A",
                schoolYear: "N/A",
                email: "",
                role: "guest",
                gradeLevel: "N/A",
            };
        }

        const email = clerkUser.emailAddresses[0].emailAddress;
        console.log("User email:", email);

        // Fetch user data from Prisma database using email
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                student: true,
            },
        });

        console.log("Fetched user from database:", JSON.stringify(user, null, 2));

        if (!user) {
            console.log("User not found in database");
            return {
                firstName: clerkUser.firstName || "Unknown",
                lastName: clerkUser.lastName || "User",
                studentNo: "Not registered",
                schoolYear: "N/A",
                email: email,
                role: "unregistered",
                gradeLevel: "N/A",
            };
        }

        // Format the response based on user role (case-insensitive)
        if (user.role.toLowerCase() === "student") {
            console.log("User is a student");
            if (user.student) {
                console.log("Student data:", JSON.stringify(user.student, null, 2));

                // Try to find registration data for this student
                const registration = await prisma.registration.findFirst({
                    where: {
                        studentNo: user.student.studentNumber,
                        deletedAt: null,
                    },
                    include: {
                        schoolYear: true,
                        yearLevel: true,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                });

                console.log("Registration data:", JSON.stringify(registration, null, 2));

                const result = {
                    firstName: user.firstName,
                    lastName: user.familyName,
                    studentNo: user.student.studentNumber,
                    schoolYear: registration?.schoolYear?.year || "N/A",
                    email: user.email,
                    role: user.role,
                    gradeLevel: registration?.yearLevel?.name || "N/A",
                };
                console.log("Returning student result:", result);
                return result;
            } else {
                console.log("Student role but no student data found");
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
        } else {
            // Handle other roles (registrar, admin, etc.)
            console.log("User has role:", user.role);
            return {
                firstName: user.firstName,
                lastName: user.familyName,
                studentNo: "N/A",
                schoolYear: "N/A",
                email: user.email,
                role: user.role,
                gradeLevel: "N/A",
            };
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
            gradeLevel: "N/A",
        };
    }
}