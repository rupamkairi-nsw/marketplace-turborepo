import e, { Request, Response } from "express";
import { host, port } from "./config";
import { apiRouter } from "./controllers";
import cookieParser from "cookie-parser";

const app = e();

app.use(e.json());
app.use(cookieParser());

app.use("/api", apiRouter);

app.get("/*", async (req: Request, res: Response) => {
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Express listening on ${host}:${port}`);
});
