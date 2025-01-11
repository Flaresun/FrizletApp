import express from "express";
import userAuth from "../middleware/userAuth.js";
import { getUserData,getUserByEmailForValidation, createUserFlashcards, getUserFlashcardsById, deleteUserFlashcardsById, getFlashcardsByEmail,
     getLatestOpenedFlashcards, updateLastDateOpened,matchingElementsByTitle,updateFlashcardById,
     addHourTimeByEmail,
     getDataByWeek,
     getDataByYear,
     createUserActivity} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData)
userRouter.post("/data-by-email", getUserByEmailForValidation)

// User flashcards
userRouter.post("/create-flashcards", createUserFlashcards)
userRouter.post("/get-flashcards-by-id", getUserFlashcardsById)
userRouter.post("/delete-flashcards-by-id", deleteUserFlashcardsById)
userRouter.post("/get-flashcards-by-email", getFlashcardsByEmail)
userRouter.post("/get-latest-flashcard-by-email", getLatestOpenedFlashcards)
userRouter.post("/update-last-opened-date", updateLastDateOpened)
userRouter.post("/matching-elements-by-title", matchingElementsByTitle)
userRouter.post("/update-flashcard-by-id", updateFlashcardById)

// User activity 
userRouter.post("/create-user-activity", createUserActivity);
userRouter.post("/add-hour-time-by-email", addHourTimeByEmail)
userRouter.post("/get-data-by-week", getDataByWeek)
userRouter.post("/get-data-by-year", getDataByYear)


export default userRouter;