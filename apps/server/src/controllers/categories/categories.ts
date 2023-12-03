import { prisma } from "database";
import { Router } from "express";

export const categoriesRouter = Router();

categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await prisma.listing_categories.findMany({
      include: {
        attributes: {
          include: {
            attributeGroup: { select: { id: true } },
          },
        },
      },
    });
    res.status(200).json({ categories });
  } catch (error) {
    console.log("categoriesRouter.get", error);
    res.status(500).json(error);
  }
});
