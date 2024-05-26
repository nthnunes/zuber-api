/*
  Warnings:

  - Added the required column `status` to the `logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "logs" ADD COLUMN     "status" TEXT NOT NULL;
