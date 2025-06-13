import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function testConnection() {
    try {
        console.log("Testing database connection...")
        
        // Simple test query
        const result = await prisma.$queryRaw`SELECT 1 as test`
        console.log("✅ Database connection successful:", result)
        
        // Try creating a simple user
        const testUser = await prisma.user.create({
            data: {
                email: "test@example.com",
                passwordHashed: "testpassword",
                name: "Test User",
                role: "student"
            }
        })
        console.log("✅ User creation successful:", testUser)
        
        // Clean up
        await prisma.user.delete({
            where: { id: testUser.id }
        })
        console.log("✅ Cleanup successful")
        
    } catch (error) {
        console.error("❌ Error:", error)
    } finally {
        await prisma.$disconnect()
        console.log("🔌 Disconnected")
    }
}

testConnection()
