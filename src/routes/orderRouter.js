import express from "express";
import { postAddOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/add-order", postAddOrder);

export default orderRouter;
