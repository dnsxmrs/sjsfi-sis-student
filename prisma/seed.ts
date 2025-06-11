import { Prisma } from "../src/generated/prisma";
import { prisma } from '@/lib/prisma'

const userData: Prisma.UserCreateInput[] = [
    {
        clerk_id: "test12",
        first_name: "Student1",
        last_name: "User1",
        email: "student2@student.com",
        status: "active",
        role: "Student",
        photo: null
    },
    {
        clerk_id: "test2",
        first_name: "Students",
        last_name: "Users",
        email: "student1@student.com",
        status: "active",
        role: "Student",
        photo: null
    },
];

async function main() {
    console.log('Seeding database...');
    // use the hash lib to hash the passwords
    const result = await prisma.user.createMany({
        data: userData,
        skipDuplicates: true
    });
    console.log(`Inserted ${result} users`);
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