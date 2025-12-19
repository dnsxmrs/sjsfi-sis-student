import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function getCurrentUser() {
    try {
        const clerkUser = await currentUser();

        // Early return if no clerk user or email
        if (!clerkUser?.emailAddresses?.[0]?.emailAddress) {
            return {
                firstName: "Guest User",
                lastName: "N/A",
                studentNo: "N/A",
            };
        }

        const email = clerkUser.emailAddresses[0].emailAddress;

        // Fetch user from database
        const user = await prisma.user.findUnique({
            where: { email },
            include: { student: true },
        });

        // User not in database
        if (!user) {
            return {
                firstName: clerkUser.firstName || "Unknown",
                lastName: clerkUser.lastName || "User",
                studentNo: "Not registered",
            };
        }

        // Handle student role
        if (user.role.toLowerCase() === "student") {
            return {
                firstName: user.firstName,
                lastName: user.familyName,
                studentNo: user.student?.studentNumber || "Student data not found",
            };
        }

        // Handle other roles
        return {
            firstName: user.firstName,
            lastName: user.familyName,
            studentNo: "N/A",
        };
    } catch (error) {
        console.error("Error in getCurrentUser:", error);
        return {
            firstName: "Error Loading User",
            lastName: "N/A",
            studentNo: "N/A",
        };
    }
}