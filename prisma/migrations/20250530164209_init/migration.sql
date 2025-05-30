-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "position" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "coverLetter" TEXT,
    "resume" TEXT NOT NULL,
    "agreeTerms" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
