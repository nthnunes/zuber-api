-- CreateTable
CREATE TABLE "logs" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "data" JSONB,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);
