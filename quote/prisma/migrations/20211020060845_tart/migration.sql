/*
  Warnings:

  - You are about to drop the column `policyId` on the `Asset` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "policyId";

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "Quote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
