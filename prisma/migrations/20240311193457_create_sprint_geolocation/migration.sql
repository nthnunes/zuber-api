-- CreateTable
CREATE TABLE "sprints" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,

    CONSTRAINT "sprints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "geolocation" (
    "id" TEXT NOT NULL,
    "sprintId" TEXT NOT NULL,

    CONSTRAINT "geolocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sprints" ADD CONSTRAINT "sprints_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "geolocation" ADD CONSTRAINT "geolocation_sprintId_fkey" FOREIGN KEY ("sprintId") REFERENCES "sprints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
