/*
  Warnings:

  - You are about to drop the column `vnswId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActiveKidsVoucher" DROP CONSTRAINT "ActiveKidsVoucher_ownerId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "vnswId";

-- CreateTable
CREATE TABLE "Profile" (
    "hasLoggedIn" BOOLEAN NOT NULL DEFAULT false,
    "vnswId" TEXT,
    "id" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveKidsVoucher" ADD CONSTRAINT "ActiveKidsVoucher_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
