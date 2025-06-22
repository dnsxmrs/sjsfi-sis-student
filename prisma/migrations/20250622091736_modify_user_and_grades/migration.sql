/*
  Warnings:

  - You are about to drop the column `grade` on the `Grade` table. All the data in the column will be lost.
  - You are about to drop the column `quarter` on the `Grade` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHashed` on the `User` table. All the data in the column will be lost.
  - Added the required column `finalGrade` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstGrading` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fourthGrading` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondGrading` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thirdGrading` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grade" DROP COLUMN "grade",
DROP COLUMN "quarter",
ADD COLUMN     "finalGrade" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "firstGrading" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fourthGrading" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "secondGrading" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "thirdGrading" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
DROP COLUMN "passwordHashed",
ADD COLUMN     "firstName" VARCHAR(255) NOT NULL,
ADD COLUMN     "lastName" VARCHAR(255) NOT NULL,
ADD COLUMN     "middleName" VARCHAR(255),
ADD COLUMN     "suffix" VARCHAR(50);
