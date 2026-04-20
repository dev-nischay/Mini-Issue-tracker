import { PrismaClient } from "@prisma/client";
import type { Comment } from "../types/db.types.js";
import { prisma } from "../config/connectDb.js";

class CommentRepo {
  constructor(public prisma: PrismaClient) {}

  async createComment(comment: Comment) {
    return await this.prisma.comments.create({ data: { ...comment } });
  }
}

export const commentRepo = new CommentRepo(prisma);
