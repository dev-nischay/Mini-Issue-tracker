import type { PrismaClient } from "@prisma/client";
import type { Issue } from "../types/db.types.js";
import { prisma } from "../config/connectDb.js";

class IssueRepo {
  constructor(public prisma: PrismaClient) {}

  async createIssue(issue: Issue) {
    return await this.prisma.issue.create({ data: issue });
  }

  async updateIssueStatus(issueId: number, status: "open" | "in_progress" | "closed") {
    return await this.prisma.issue.update({ data: { status }, where: { issue_id: issueId } });
  }

  async findIssue(issueId: number) {
    return await this.prisma.issue.findUnique({ where: { issue_id: issueId } });
  }

  async getCommentsByIssue(issueId: number) {
    return await this.prisma.issue.findUnique({
      where: { issue_id: issueId },
      select: { title: true, comments: { select: { comment: true } } },
    });
  }
}

export const issueRepo = new IssueRepo(prisma);
