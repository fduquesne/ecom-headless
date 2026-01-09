import { Router } from "express";

import controllers from "../controllers";

const router = Router();

router.get("/", controllers.health.get);

export default router;
