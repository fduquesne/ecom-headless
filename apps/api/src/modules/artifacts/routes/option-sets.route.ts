import { Router } from "express";

import controllers from "../controllers";

const router = Router();

router.get("/", controllers.optionSets.getAll);
router.get("/:id", controllers.optionSets.getById);

export default router;
