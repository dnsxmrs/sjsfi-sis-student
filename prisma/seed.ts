import { Prisma } from "../src/generated/prisma";
import { prisma } from '@/lib/prisma'

const userData: Prisma.UserCreateInput[] = [
    {
        email: 'parent.juarez@example.com',
        passwordHashed: 'hashedpassword123',
        name: 'Maria Juarez',
        role: 'parent',
        parent: {
            create: {
                contactNumber: '09171234567'
            }
        }
    },
    {
        email: 'jose.reyes@example.com',
        passwordHashed: 'hashedpassword1',
        name: 'Jose Miguel Reyes',
        role: 'student',
        student: {
            create: {
                studentNumber: 'STU2025001',
                dateOfBirth: new Date('2007-03-15'),
                gender: 'Male',
                guardianName: 'Maria Juarez',
                guardianContact: '09171234567',
                address: '123 Mabini Street, Quezon City',
                gradeLevel: 'Grade 10',
                status: 'active',
                // You need to set the correct parent id or userId here.
                // For demonstration, assuming parent userId is 1 (update as needed).
                parent: {
                    connect: { userId: 1 }
                }
            }
        }
    },
    {
        email: 'angelica.tan@example.com',
        passwordHashed: 'hashedpassword2',
        name: 'Angelica Tan',
        role: 'student',
        student: {
            create: {
                studentNumber: 'STU2025002',
                dateOfBirth: new Date('2008-06-21'),
                gender: 'Female',
                guardianName: 'Maria Juarez',
                guardianContact: '09171234567',
                address: '45 Mahogany Avenue, Pasig City',
                gradeLevel: 'Grade 9',
                status: 'active',
                parent: {
                    connect: { userId: 1 }
                }
            }
        }
    },
    {
        email: 'daniel.santos@example.com',
        passwordHashed: 'hashedpassword3',
        name: 'Daniel Santos',
        role: 'student',
        student: {
            create: {
                studentNumber: 'STU2025003',
                dateOfBirth: new Date('2006-12-03'),
                gender: 'Male',
                guardianName: 'Maria Juarez',
                guardianContact: '09171234567',
                address: '89 Jacinto Road, Manila',
                gradeLevel: 'Grade 11',
                status: 'active',
                parent: {
                    connect: { userId: 1 }
                }
            }
        }
    }
];

async function main() {
    console.log('Seeding database...');
    for (const user of userData) {
        await prisma.user.create({ data: user });
        // Connection remains open during all insertions
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