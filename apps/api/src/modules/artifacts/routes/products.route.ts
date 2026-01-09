import { Router } from "express";

import controllers from "../controllers";

const router = Router();

router.get("/", controllers.products.getAll);
router.get("/:id", controllers.products.getById);

export default router;
