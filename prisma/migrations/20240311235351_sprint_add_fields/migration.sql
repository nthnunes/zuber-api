/*
  Warnings:

  - Added the required column `date_finished` to the `sprints` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sprints" ADD COLUMN     "date_finished" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "date_start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
