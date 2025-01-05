import express from "express";
import userAuth from "../middleware/userAuth.js";
import { getUserData,getUserByEmailForValidation } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData)

userRouter.post("/data-by-email", getUserByEmailForValidation)

export default userRouter;