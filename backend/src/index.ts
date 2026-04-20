import express from "express";
import "dotenv/config";
import userRouter from "./routes/user.routes.js";
import { unkownRouteHandler } from "./utils/unkownRouteHandler.js";
import { ErrorMiddleware } from "./middlewares/error.js";
import { logger } from "./middlewares/logger.js";
import { auth } from "./middlewares/auth.js";
import projectRouter from "./routes/project.routes.js";
const port = process.env.PORT;
export const app = express();
app.use(express.json());
app.use(logger);
// user router , comment router , issue router , project router
app.use("/api/user/", userRouter);
app.use("/api/project/", projectRouter);

app.use(unkownRouteHandler);
app.use(ErrorMiddleware);

app.listen(port, () => {
  console.log(`SERVER RUNNING AT PORT ${port}`);
});
