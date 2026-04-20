import { prisma } from "../config/connectDb.js";
class IssueRepo {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createIssue(issue) {
        return await this.prisma.issue.create({ data: issue });
    }
    async updateIssueStatus(issueId, status) {
        return await this.prisma.issue.update({ data: { status }, where: { issue_id: issueId } });
    }
    async findIssue(issueId) {
        return await this.prisma.issue.findUnique({ where: { issue_id: issueId } });
    }
    async getCommentsByIssue(issueId) {
        return await this.prisma.issue.findUnique({
            where: { issue_id: issueId },
            select: { title: true, comments: { select: { comment: true } } },
        });
    }
}
export const issueRepo = new IssueRepo(prisma);
