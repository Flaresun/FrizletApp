import express from "express";
import userAuth from "../middleware/userAuth.js";
import { getUserData,getUserByEmailForValidation, createUserFlashcards, getUserFlashcardsById, deleteUserFlashcardsById, getFlashcardsByEmail,
     getLatestOpenedFlashcards, updateLastDateOpened,matchingElementsByTitle,updateFlashcardById} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData)

userRouter.post("/data-by-email", getUserByEmailForValidation)
userRouter.post("/create-flashcards", createUserFlashcards)
userRouter.post("/get-flashcards-by-id", getUserFlashcardsById)
userRouter.post("/delete-flashcards-by-id", deleteUserFlashcardsById)
userRouter.post("/get-flashcards-by-email", getFlashcardsByEmail)
userRouter.post("/get-latest-flashcard-by-email", getLatestOpenedFlashcards)
userRouter.post("/update-last-opened-date", updateLastDateOpened)
userRouter.post("/matching-elements-by-title", matchingElementsByTitle)
userRouter.post("/update-flashcard-by-id", updateFlashcardById)


export default userRouter;