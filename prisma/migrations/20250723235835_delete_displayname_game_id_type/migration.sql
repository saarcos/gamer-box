/*
  Warnings:

  - You are about to drop the column `displayName` on the `User` table. All the data in the column will be lost.
  - Changed the type of `gameId` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gameId` on the `UserGameStatus` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "gameId",
ADD COLUMN     "gameId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "displayName";

-- AlterTable
ALTER TABLE "UserGameStatus" DROP COLUMN "gameId",
ADD COLUMN     "gameId" INTEGER NOT NULL;
