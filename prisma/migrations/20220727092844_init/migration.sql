-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('ONLINE', 'ACTIVE_KIDS', 'IN_PERSON', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "vnswId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "startTime" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),
    "price" DECIMAL(65,30),
    "location" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActiveKidsVoucher" (
    "id" SERIAL NOT NULL,
    "ownerId" TEXT NOT NULL,
    "credit" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "voucherNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "ActiveKidsVoucher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveKidsVoucher_ownerId_key" ON "ActiveKidsVoucher"("ownerId");

-- AddForeignKey
ALTER TABLE "ActiveKidsVoucher" ADD CONSTRAINT "ActiveKidsVoucher_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
