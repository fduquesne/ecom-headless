import { Router } from "express";

import controllers from "../controllers";

const router = Router();

router.get("/", controllers.collections.getAll);
router.get("/:id", controllers.collections.getById);

export default router;
