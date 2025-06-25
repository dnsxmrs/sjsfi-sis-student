-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "message" TEXT NOT NULL,
    "suggestion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
