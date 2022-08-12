/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Example` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Example_email_key" ON "Example"("email");
