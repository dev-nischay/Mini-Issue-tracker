import { httpStatus } from "../types/enums.js";
export const unkownRouteHandler = (req, res, next) => {
    return res.status(httpStatus.NotFound).json({ success: false, error: "404 not found" });
};
