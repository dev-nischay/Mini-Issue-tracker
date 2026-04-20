/*
  Warnings:

  - You are about to alter the column `comment` on the `Comments` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.

*/
-- AlterTable
ALTER TABLE "Comments" ALTER COLUMN "comment" SET DATA TYPE VARCHAR(500);
