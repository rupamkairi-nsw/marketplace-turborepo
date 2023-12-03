import { prisma } from "database";
import { Router } from "express";

export const listingAttributesRouter = Router();

listingAttributesRouter.put("/", async (req, res) => {
  try {
    const { body, params, allParams, query } = req;
    const { attributes } = body;
    const listing = await prisma.listings.update({
      where: { id: +allParams.id },
      data: {
        attributes,
      },
    });
    return res.status(200).json({ listing });
  } catch (error) {
    console.log("listingAttributesRouter.put", error);
    return res.status(500).json(error);
  }
});
