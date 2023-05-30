import express from "express";
import {
  getRateByRes,
  getRateByUser,
  postAddRate,
} from "../controllers/rateController.js";

const rateRouter = express.Router();

rateRouter.post("/add-rate", postAddRate);
rateRouter.get("/get-rate-by-res/:resId", getRateByRes);
rateRouter.get("/get-rate-by-user/:userId", getRateByUser);

export default rateRouter;
