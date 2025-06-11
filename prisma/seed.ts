import { Prisma } from "../src/generated/prisma";
import { prisma } from '@/lib/prisma'

const userData: Prisma.UserCreateInput[] = [
    {
        clerk_id: "test1",
        first_name: "Student",
        last_name: "User",
        email: "student@student.com",
        status: "active",
        role: "Student",
        grade_level: "1st Year",
        enrollment_status: "enrolled",
        photo: null,
    },
    {
        clerk_id: "test12",
        first_name: "Student1",
        last_name: "User1",
        email: "student2@student.com",
        status: "active",
        role: "Student",
        grade_level: "2nd Year",
        enrollment_status: "enrolled",
        photo: null,
    },
    {
        clerk_id: "test2",
        first_name: "Students",
        last_name: "Users",
        email: "student1@student.com",
        status: "active",
        role: "Student",
        grade_level: "1st Year",
        enrollment_status: "not enrolled",
        photo: null,
    },
];

async function main() {
    console.log('Seeding database...');
    for (const user of userData) {
        await prisma.user.create({ data: user });
        await prisma.$disconnect(); // force connection close
    }

    console.log('Inserted users');
}


main()
    .then(() => {
        console.log('Seed complete');
        return prisma.$disconnect();
    })
    .catch((e) => {
        console.error('Seed failed', e);
        return prisma.$disconnect().finally(() => process.exit(1));
    });