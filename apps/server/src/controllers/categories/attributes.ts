import { prisma } from "database";
import { Router } from "express";

export const attributesRouter = Router();

attributesRouter.get("/", async (req, res) => {
  try {
    const attributes = await prisma.listing_attributes.findMany({
      // select: {
      //   filterable: true,
      // },
      include: {
        attributeGroup: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    res.status(200).json({ attributes });
  } catch (error) {
    console.log("attributesRouter.get", error);
    res.status(500).json(error);
  }
});
