import { prisma } from "../config/connectDb.js";
export class ProjectRepo {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createProject(p) {
        return await this.prisma.project.create({
            data: { project_name: p.project_name, user_id: p.user_id },
        });
    }
    async renameProject(projectName, projectId) {
        return await this.prisma.project.update({
            data: { project_name: projectName },
            where: { project_id: projectId },
            omit: { project_id: true },
        });
    }
    async findProject(projectId) {
        return await this.prisma.project.findUnique({
            where: { project_id: projectId },
            omit: { project_id: true },
        });
    }
    async getProjectsByuser(userid) {
        return await this.prisma.project.findMany({
            where: { user_id: userid },
            omit: { project_id: true },
        });
    }
    async getIssueByProject(projectId) {
        return await this.prisma.project.findUnique({
            where: { project_id: projectId },
            select: { issues: true, project_name: true },
        });
    }
}
export const projectRepo = new ProjectRepo(prisma);
