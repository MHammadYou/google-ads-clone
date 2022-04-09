import { Router } from "express";
import AdViewRoutes from "./ads";
import CreateRoutes from "./create";
import UpdateRoutes from "./update";
import DeleteRoutes from "./delete";

const router = Router();

router.use('/', AdViewRoutes);
router.use('/', CreateRoutes);
router.use('/', UpdateRoutes);
router.use('/', DeleteRoutes);

export default router;


