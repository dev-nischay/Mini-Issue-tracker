import { prisma } from "../config/connectDb.js";
import { omit } from "zod/mini";
export class UserRepo {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(data) {
        return await this.prisma.user.create({ data, omit: { password: true } });
    }
    async findUserByEmail(email) {
        return await this.prisma.user.findUnique({ where: { email } });
    }
    async deleteUser(userid) {
        return await prisma.user.delete({ where: { user_id: userid }, omit: { password: true } });
    }
}
export const userRepo = new UserRepo(prisma);
