-- DropForeignKey
ALTER TABLE "geolocation" DROP CONSTRAINT "geolocation_sprintId_fkey";

-- DropForeignKey
ALTER TABLE "sprints" DROP CONSTRAINT "sprints_deviceId_fkey";

-- AddForeignKey
ALTER TABLE "sprints" ADD CONSTRAINT "sprints_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "geolocation" ADD CONSTRAINT "geolocation_sprintId_fkey" FOREIGN KEY ("sprintId") REFERENCES "sprints"("id") ON DELETE CASCADE ON UPDATE CASCADE;
