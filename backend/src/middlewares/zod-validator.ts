import type { Request, Response, NextFunction } from "express";
import { safeParse, ZodType } from "zod";
import { AppError } from "../utils/AppError.js";
import { httpStatus } from "../types/enums.js";

export const validator = (schema: ZodType, source: "body" | "params" | "query" = "body") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[source];

    const result = safeParse(schema, data);

    if (!result.success) {
      const readableError = Object.fromEntries(result.error.issues.map((issue) => [issue.path.join(), issue.message]));
      console.log(readableError);

      return next(new AppError("Invalid request schema", httpStatus.BadRequest, readableError));
    }

    switch (source) {
      case "body":
        req.validatedBody = result.data;
        break;
      case "params":
        req.validatedParams = result.data as { projectId: number; issueId: number };
        break;
      default:
        req.validatedQuery = result.data;
    }

    next();
  };
};
