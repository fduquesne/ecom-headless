import express from "express";

import commonRoutes from "./modules/common/routes";
import artifactRoutes from "./modules/artifacts/routes";

export const createApp = () => {
  const app = express();

  app.use(express.json());

  // Common routers
  app.use("/api/health", commonRoutes.health);

  // Artifact routers
  app.use("/api/artifacts/collections", artifactRoutes.collections);

  return app;
};
