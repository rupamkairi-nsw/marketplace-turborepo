import { Router } from "express";
import { listingsRouter } from "./listings";

export const apiRouter = Router();

apiRouter.get("", (req, res) => {
  res.sendStatus(200);
});

apiRouter.use("/listings", listingsRouter);
