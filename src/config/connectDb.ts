import { Client } from "pg";

const pgUrl = process.env.DB_CONNECTION_STRING;

export const connectDb = async () => {
  try {
    if (pgUrl) {
      const client = new Client(pgUrl);
      await client.connect();
      return;
    }
    console.error("ENVIORMENT VARIABLES ARE NOT SET");
  } catch (error) {
    console.log(`db connection failed -- ${error}`);
  }
};
