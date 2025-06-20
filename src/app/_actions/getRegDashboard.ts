import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function getActiveStudentCount(): Promise<number> {
  const count = await prisma.student.count({
    where: { status: "active" },
  });
  return count;
}
