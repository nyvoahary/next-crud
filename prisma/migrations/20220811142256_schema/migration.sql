/*
  Warnings:

  - Added the required column `age` to the `Example` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Example` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Example` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Example` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Example" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
