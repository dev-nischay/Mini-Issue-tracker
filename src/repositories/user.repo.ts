import { prisma } from "../config/connectDb.js";
import type { PrismaClient } from "@prisma/client";
import type { User } from "../types/db.types.js";

export class UserRepo {
  constructor(public prisma: PrismaClient) {}

  async createUser(data: User) {
    return await this.prisma.user.create({ data });
  }
  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async deleteUser(userid: number) {
    return await prisma.user.delete({ where: { user_id: userid } });
  }
}

export const userRepo = new UserRepo(prisma);
