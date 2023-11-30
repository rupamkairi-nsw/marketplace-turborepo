import e, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import ingest from "ingest";
import { apiRouter } from "./controllers";
import { ingestRouter } from "./controllers/ingest";
import { host, port } from "./config";
import { rewriteBody } from "./mung";

const app = e();

app.use(cookieParser());
app.use(e.json());
app.use(
  cors({
    origin: [
      /http(|s):\/\/(|www\.)localhost:(3000|3001)$/,
      // /http(|s):\/\/(|www\.)localhost:[0-9]{4,}$/,
    ],
    credentials: true,
  })
);
app.use(rewriteBody);

app.use("/api", apiRouter);

app.use("/ingest", ingest.single("file"), ingestRouter);

app.get("/*", async (req: Request, res: Response) => {
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Express listening on ${host}:${port}`);
});
