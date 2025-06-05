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
        role: "Faculty",
        photo: null
    },
    {
        clerk_id: "clerk_456",
        first_name: "Bob",
        last_name: "Johnson",
        email: "faculty@faculty.com",
        hashed_password: "hashed_password_here",
        status: "active",
        role: "Faculty",
        photo: null
    },
    {
        clerk_id: "test1",
        first_name: "Student",
        last_name: "User",
        email: "student@student.com",
        hashed_password: "idk doesnt matter",
        status: "active",
        role: "Student",
        photo: null
    },
    {
        clerk_id: "admin_001",
        first_name: "Anna",
        last_name: "Admin",
        email: "admin@admin.com",
        hashed_password: "hashed_password_here",
        status: "active",
        role: "Admin",
        photo: null
    },
    {
        clerk_id: "cashier_001",
        first_name: "Carl",
        last_name: "Cashier",
        email: "cashier@cashier.com",
        hashed_password: "hashed_password_here",
        status: "active",
        role: "Cashier",
        photo: null
    },
    {
        clerk_id: "registrar_001",
        first_name: "Rina",
        last_name: "Registrar",
        email: "registrar@registrar.com",
        hashed_password: "hashed_password_here",
        status: "active",
        role: "Registrar",
        photo: null
    }
];

async function main() {
    await prisma.user.createMany({
        data: userData,
        skipDuplicates: true
    });
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