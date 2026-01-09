import type { Request, Response } from "express";

import services from "../services";

export const getAll = async (_req: Request, res: Response) => {
  const results = await services.collections.getAll();
  return res.status(200).json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await services.collections.getById(req.params.id);
  if (!result.found) {
    return res.status(404).json({ error: "COLLECTION_NOT_FOUND" });
  }
  return res.status(200).json(result.collection);
};
