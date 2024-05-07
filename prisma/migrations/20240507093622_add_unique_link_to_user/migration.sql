/*
  Warnings:

  - A unique constraint covering the columns `[uniqueLink]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `uniqueLink` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `platform` DROP FOREIGN KEY `Platform_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `uniqueLink` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_uniqueLink_key` ON `User`(`uniqueLink`);

-- AddForeignKey
ALTER TABLE `Platform` ADD CONSTRAINT `Platform_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
