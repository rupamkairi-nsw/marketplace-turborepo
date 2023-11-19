import { Router } from "express";
import { decodeXAuthHeaders } from "../middlewares";

import { meRouter } from "./me";
import { listingsRouter } from "./listings";

export const apiRouter = Router();

apiRouter.get("", (req, res) => {
  return res.sendStatus(200);
});

apiRouter.use("/me", meRouter);
apiRouter.use("/listings", decodeXAuthHeaders, listingsRouter);
