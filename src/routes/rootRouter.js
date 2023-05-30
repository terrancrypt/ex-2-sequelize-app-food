import express from "express";
import resRouter from "./restaurantRouter.js";
import orderRouter from "./orderRouter.js";
import rateRouter from "./rateRouter.js";

const rootRouter = express.Router();

rootRouter.use("/res", resRouter);
rootRouter.use("/rate", rateRouter);
rootRouter.use("/order", orderRouter);

export default rootRouter;
