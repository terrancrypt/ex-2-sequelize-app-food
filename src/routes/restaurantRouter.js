import express from "express";
import {
  deleteUnlikeRes,
  getLikeByRes,
  getLikeByUser,
  postLikeRes,
} from "../controllers/restaurantController.js";

const resRouter = express.Router();

resRouter.post("/like-res", postLikeRes);
resRouter.delete("/unlike-res", deleteUnlikeRes);
resRouter.get("/get-like-by-res/:resId", getLikeByRes);
resRouter.get("/get-like-by-user/:userId", getLikeByUser);

resRouter.post;

export default resRouter;
