import { configDotenv } from "dotenv";
configDotenv();

import { instance as ingest } from "./multer";

export default ingest;
