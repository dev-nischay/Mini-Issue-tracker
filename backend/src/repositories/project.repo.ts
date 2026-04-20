import type { PrismaClient } from "@prisma/client";
import type { Project } from "../types/db.types.js";
import { prisma } from "../config/connectDb.js";

export class ProjectRepo {
  constructor(public prisma: PrismaClient) {}

  async createProject(p: Project) {
    return await this.prisma.project.create({
      data: { project_name: p.project_name, user_id: p.user_id },
    });
  }

  async renameProject(projectName: string, projectId: number) {
    return await this.prisma.project.update({
      data: { project_name: projectName },
      where: { project_id: projectId },
      omit: { project_id: true },
    });
  }

  async findProject(projectId: number) {
    return await this.prisma.project.findUnique({
      where: { project_id: projectId },
      omit: { project_id: true },
    });
  }

  async getProjectsByuser(userid: number) {
    return await this.prisma.project.findMany({
      where: { user_id: userid },
      omit: { project_id: true },
    });
  }

  async getIssueByProject(projectId: number) {
    return await this.prisma.project.findUnique({
      where: { project_id: projectId },
      select: { issues: true, project_name: true },
    });
  }
}

export const projectRepo = new ProjectRepo(prisma);
