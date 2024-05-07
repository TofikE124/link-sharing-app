/*
  Warnings:

  - Made the column `userId` on table `platform` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `platform` DROP FOREIGN KEY `Platform_userId_fkey`;

-- AlterTable
ALTER TABLE `platform` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Platform` ADD CONSTRAINT `Platform_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
