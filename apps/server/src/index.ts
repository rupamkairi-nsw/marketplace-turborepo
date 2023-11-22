import e, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { apiRouter } from "./controllers";
import { host, port } from "./config";

const app = e();

app.use(cookieParser());
app.use(e.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
// app.use(cors());

app.use("/api", apiRouter);

app.get("/*", async (req: Request, res: Response) => {
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Express listening on ${host}:${port}`);
});
