import { AppError } from "./AppError.js";
export const asyncHandler = (fn) => {
    return (req, res, next) => {
        try {
            return fn(req, res, next);
        }
        catch (error) {
            return next(error);
        }
    };
};
