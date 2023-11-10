import { desert, deserts, newDesert } from "../controllers/deserts.controller";
import { Router } from "express";
const router: Router = Router();

router.post('/new-desert', newDesert);
router.get('/:id', desert);
router.get('/', deserts);

export default router;