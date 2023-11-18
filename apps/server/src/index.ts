import e, { Request, Response } from "express";
import { host, port } from "./config";
import { apiRouter } from "./controllers";

const app = e();

app.use(e.json());

app.use("/api", apiRouter);

app.get("/*", async (req: Request, res: Response) => {
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Express listening on ${host}:${port}`);
});
