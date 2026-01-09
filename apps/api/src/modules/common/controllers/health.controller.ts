import type { Request, Response } from "express";
import services from "../services";

export const get = (_req: Request, res: Response) => {
  res.status(200).json(services.health.get());
};
