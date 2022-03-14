// import { Router } from "express";
// import AdViewRoutes from "./ads";
// import CreateRoutes from "./create";
// import UpdateRoutes from "./update";
// import DeleteRoutes from "./delete";
//
// const router = Router();
//
// router.use('/ads', AdViewRoutes);
// router.use('/ads', CreateRoutes);
// router.use('/ads', UpdateRoutes);
// router.use('/ads', DeleteRoutes);
//
// export default router;

export { default as adViewRoutes } from "./ads";
// export { default as adCreateRoute } from "./create";
export { default as adUpdateRoute } from "./update";
export { default as adDeleteRoute } from "./delete";
