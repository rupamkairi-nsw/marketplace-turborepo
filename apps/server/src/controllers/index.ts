import { Router } from "express";
import { decodeXAuthHeaders } from "../middlewares";

import { meRouter } from "./me";
import { listingsRouter } from "./listings";

import { categoriesRouter } from "./categories/categories";
import { attributesRouter } from "./categories/attributes";
import { attributeGroupsRouter } from "./categories/attribute-groups";

export const apiRouter = Router();

apiRouter.get("", (req, res) => {
  return res.sendStatus(200);
});

apiRouter.use("/me", meRouter);
apiRouter.use("/listings", listingsRouter);
// apiRouter.use("/listings", decodeXAuthHeaders, listingsRouter);

apiRouter.use("/categories", categoriesRouter);
apiRouter.use("/categories/attributes", attributesRouter);
apiRouter.use("/categories/attributes/groups", attributeGroupsRouter);
