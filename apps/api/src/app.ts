import express from "express";
import { healthHandler } from "./routes/health.routes";

export const createApp = () => {
  const app = express();

  app.use(express.json());

  app.get("/health", healthHandler);

  return app;
};
