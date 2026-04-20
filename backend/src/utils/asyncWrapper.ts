import type { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError.js";

export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      return fn(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
};
