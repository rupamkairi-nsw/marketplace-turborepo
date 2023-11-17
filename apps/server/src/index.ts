import e, { Request, Response } from "express";

const app = e();

app.get("", async (req: Request, res: Response) => {
  return res.sendStatus(201);
});

app.get("/api", async (req: Request, res: Response) => {
  return res.sendStatus(403);
});

app.get("/*", async (req: Request, res: Response) => {
  return res.sendStatus(404);
});

app.listen(8000, () => {
  console.log(`Express listening on ${8000}`);
});
