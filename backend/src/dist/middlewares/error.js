import { AppError } from "../utils/AppError.js";
export const ErrorMiddleware = (err, req, res, next) => {
    if (err instanceof AppError) {
        const statusCode = err.statusCode || 500;
        if (err.fieldErrors && Object.keys(err.fieldErrors).length > 0) {
            return res.status(statusCode).json({ success: false, error: err.message, fieldErrors: err.fieldErrors });
        }
        return res.status(statusCode).json({ success: false, error: err.message });
    }
    if (err instanceof Error) {
        console.log(`Unexpected Error: ${err} ${err.stack}`);
        return res.status(500).json({ success: false, error: "Something went wrong try again later" });
    }
};
