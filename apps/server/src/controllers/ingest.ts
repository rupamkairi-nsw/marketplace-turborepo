import { Router } from "express";

export const ingestRouter = Router();

ingestRouter.put("/", async (req, res) => {
  try {
    res.status(200).json({ file: req.file });
  } catch (error) {
    console.log("ingestRouter.put", error);
    return res.status(500).json(error);
  }
});
