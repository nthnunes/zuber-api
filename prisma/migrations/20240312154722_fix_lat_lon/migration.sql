/*
  Warnings:

  - The primary key for the `geolocation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `geolocation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `lat` to the `geolocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lon` to the `geolocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "geolocation" DROP CONSTRAINT "geolocation_pkey",
ADD COLUMN     "lat" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "lon" DECIMAL(65,30) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "geolocation_pkey" PRIMARY KEY ("id");
