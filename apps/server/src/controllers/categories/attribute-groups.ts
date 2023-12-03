import { prisma } from "database";
import { Router } from "express";

export const attributeGroupsRouter = Router();

attributeGroupsRouter.get("/", async (req, res) => {
  try {
    const attributeGroups = await prisma.listing_attribute_groups.findMany({});
    res.status(200).json({ attributeGroups });
  } catch (error) {
    console.log("attributeGroupsRouter.get", error);
    res.status(500).json(error);
  }
});
