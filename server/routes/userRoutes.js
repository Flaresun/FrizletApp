import express from "express";
import userAuth from "../middleware/userAuth.js";
import { getUserData,getUserByEmailForValidation, createUserFlashcards, getUserFlashcardsById, deleteUserFlashcards, getFlashcardsByEmail, getLatestOpenedFlashcards, updateLastDateOpened } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData)

userRouter.post("/data-by-email", getUserByEmailForValidation)
userRouter.post("/create-flashcards", createUserFlashcards)
userRouter.get("/get-flashcards-by-id", getUserFlashcardsById)
userRouter.post("/delete-flashcards", deleteUserFlashcards)
userRouter.post("/get-flashcards-by-email", getFlashcardsByEmail)
userRouter.post("/get-latest-flashcard-by-email", getLatestOpenedFlashcards)
userRouter.post("/update-last-opened-date", updateLastDateOpened)


export default userRouter;