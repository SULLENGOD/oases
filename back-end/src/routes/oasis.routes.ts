import { newOasis, oases, oasis } from "../controllers/oasis.controllers";
import { Router } from "express";

const router: Router = Router();

router.get("/:id", oasis);
router.get("/", oases);
router.post("/new-oasis", newOasis);


export default router; 