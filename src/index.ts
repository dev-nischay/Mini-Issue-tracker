import express from "express";
import "dotenv/config";
import { connectDb } from "./config/connectDb.js";
const port = process.env.PORT;
const app = express();

app.use(express.json());

app.listen(port, async () => {
  await connectDb();
  console.log(`SERVER RUNNING AT PORT ${port}`);
});
