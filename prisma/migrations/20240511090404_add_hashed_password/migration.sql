/*
  Warnings:

  - You are about to drop the column `uniqueLink` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uniqueLinkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `uniqueLinkId` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX `User_uniqueLink_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `uniqueLink`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NULL,
    ADD COLUMN `uniqueLinkId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_uniqueLinkId_key` ON `User`(`uniqueLinkId`);
