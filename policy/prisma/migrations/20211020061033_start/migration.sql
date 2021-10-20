-- CreateEnum
CREATE TYPE "PolicyStatus" AS ENUM ('PENDING', 'ACTIVE', 'INVALID', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "Policy" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "version" INTEGER NOT NULL DEFAULT 1,
    "quoteId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "policyNumber" TEXT NOT NULL,
    "status" "PolicyStatus" NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,

    CONSTRAINT "Policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PolicyTransaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "version" INTEGER NOT NULL DEFAULT 1,
    "policyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PolicyTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PolicyDetails" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "version" INTEGER NOT NULL DEFAULT 1,
    "policyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PolicyDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PolicyTransaction" ADD CONSTRAINT "PolicyTransaction_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolicyDetails" ADD CONSTRAINT "PolicyDetails_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
