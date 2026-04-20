import { PrismaClient } from "@prisma/client";
import { prisma } from "../config/connectDb.js";
class CommentRepo {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createComment(comment) {
        return await this.prisma.comments.create({ data: { ...comment } });
    }
}
export const commentRepo = new CommentRepo(prisma);
