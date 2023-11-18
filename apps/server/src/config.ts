import { configDotenv } from "dotenv";

configDotenv();

export const host = process.env.HOST;
export const port = process.env.PORT;
