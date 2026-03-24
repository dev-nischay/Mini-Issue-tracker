/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('open', 'in_progress', 'closed');

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(300) NOT NULL,
    "email" VARCHAR(300) NOT NULL,
    "password" VARCHAR(16) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Project" (
    "project_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "project_name" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "issue_id" SERIAL NOT NULL,
    "title" VARCHAR(300) NOT NULL,
    "project_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'open',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("issue_id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "comment_id" SERIAL NOT NULL,
    "issue_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("comment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_issue_id_fkey" FOREIGN KEY ("issue_id") REFERENCES "Issue"("issue_id") ON DELETE RESTRICT ON UPDATE CASCADE;
