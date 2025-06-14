import { prisma } from '@/lib/prisma';

export async function debugUser(email?: string) {
    try {
        console.log('=== DEBUG USER DATA ===');
        
        // Get all users if no email provided
        if (!email) {
            const allUsers = await prisma.user.findMany({
                include: {
                    student: true,
                    teacher: true
                }
            });
            console.log('All users in database:', allUsers.length);
            allUsers.forEach(user => {
                console.log(`User: ${user.email} - Role: ${user.role} - Has Student: ${!!user.student} - Has Teacher: ${!!user.teacher}`);
                if (user.student) {
                    console.log(`  Student Number: ${user.student.studentNumber}`);
                }
            });
            return allUsers;
        }

        // Get specific user by email
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                student: {
                    include: {
                        enrollments: true
                    }
                },
                teacher: true
            }
        });

        if (!user) {
            console.log(`No user found with email: ${email}`);
            return null;
        }

        console.log('User found:', {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            hasStudent: !!user.student,
            hasTeacher: !!user.teacher
        });

        if (user.student) {
            console.log('Student data:', {
                studentNumber: user.student.studentNumber,
                gradeLevel: user.student.gradeLevel,
                status: user.student.status,
                enrollmentsCount: user.student.enrollments.length
            });
        }

        return user;

    } catch (error) {
        console.error('Debug user error:', error);
        return null;
    }
}
