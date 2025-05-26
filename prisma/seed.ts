import { Prisma } from "../src/generated/prisma";
import { prisma } from '@/lib/prisma'


const userData: Prisma.UserCreateInput[] = [
    {
        clerk_id: "clerk_123",
        first_name: "Alice",
        last_name: "Smith",
        email: "alice@prisma.io",
        hashed_password: "hashed_password_here",
        status: "active",
        role: "faculty",
        photo: null
    },
    {
        clerk_id: "clerk_456",
        first_name: "Bob",
        last_name: "Johnson",
        email: "bob@prisma.io",
        hashed_password: "hashed_password_here",
        status: "active",
        role: "faculty",
        photo: null
    }
];

async function main() {
    for (const u of userData) {
        await prisma.user.upsert({
            where: { email: u.email },
            update: {},
            create: u,
        });
    }
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