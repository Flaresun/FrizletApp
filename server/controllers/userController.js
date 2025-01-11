import userModel from "../models/userModel.js";
import userFlashcards from "../models/flashcardModel.js";
import {ObjectId} from "mongodb"; 

export const getUserData = async (req,res) => {
    try {

        const {userId} = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({success:false, message:"User not found"})
        }

        res.status(200).json({
            success:true,
            userData : {
                email: user.email,
                isAccountVerified : user.isAccountVerified,
                otp : user.otp
                
            }
        })

    } catch (error) {
        return res.status(403).json({success: false, message : error.message});
    }
}

export const getUserByEmailForValidation = async (req,res) => {
    
    const {email} = req.body;

    try {

        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message:"User not found"});
        }

        user.isOtpReset = true;
        await user.save();

        return res.json({
            success: true,
            userData : {
                email: user.email,
                otp : user.resetOtp
            }
        })

    } catch (error) {
        return res.json({success: false, messsage : error.message});
    }
    
}

export const createUserFlashcards = async (req,res) => {
    const {email, terms, definitions, title, description} = req.body;
    
    if (!email|| !terms || !definitions || !title || !description) {
        return res.json({success : false, message : "Required Field Missing"});
    }

    try {
        const flashcardId = email + terms.length + title.replace(/\s/g, '') + description.replace(/\s/g, ''); // The .replace(/\s/g, '') is regex and it removes spaces from strings  
        const userCards  = new userFlashcards({flashcardId, email, terms, definitions, title, description});
        await userCards.save();        

        return res.status(201).json({success : true, id : flashcardId, message : "Flashcard Created Successfully!"});

    } catch(error) {
        return res.json({success: false, messsage : error.message});
    }
}

export const getUserFlashcardsById = async (req,res) => {
    const {flashcardId} = req.body;

    if (!flashcardId) {
        return res.json({success: false, message: "Id required"})
    }

    try {
        // Get flashcard data
        const flashcard = await userFlashcards.findById((flashcardId));

        if (!flashcard) {
            return res.json({success : false, message : "Flashcard not found"});
        }


        return res.json({success : true, message : "Data successfully returned", data : flashcard})

        

    } catch (error) {
        return res.json({success : false, message : error.message});
    }
    
}

export const deleteUserFlashcardsById = async (req,res) => {
    const {flashcardId} = req.body;

    if (!flashcardId) {
        return res.json({success: false, message: "Id required"})
    }

    try {
        // Get flashcard data
        const flashcard = await userFlashcards.findById((flashcardId))

        if (!flashcard) {
            return res.json({success : false, message : "Flashcard not found"});
        }

        await userFlashcards.deleteOne({"_id" :flashcardId});
        
        return res.json({success : true, message : "Flashcard successfully deleted"})

    } catch (error) {
        return res.json({success : false, message : error.message});
    }
    
}

export const getFlashcardsByEmail = async (req, res) => {
    const {email} = req.body;

    if (!email) {
        return res.json({success: false, message : "Email required"})
    }
    
    try {

        const data = await userFlashcards.find({"email" : {$all : email}})

        if (!data) {
            return res.json({success : false, message : "No flashcards exist by this email"})
        }

        return res.json({success: true, message : "Data Returned Successfully", data : data})
    } catch(error) {
        return res.json({success : false, message : error.message});
    }

}

export const getLatestOpenedFlashcards = async (req,res) => {
    const {email} = req.body;

    if (!email) {
        return res.json({success: false, message : "Email required"})
    }
    
    try {

        const data = await userFlashcards.find().sort({"lastDateOpened" : -1}) // Sorted in descending order so we can get the earliest date (ascending : 1; descending : -1)

        if (!data) {
            return res.json({success : false, message : "No flashcards exist by this email"})
        }

        return res.json({success: true, message : "Data Returned Successfully", data : data})
    } catch(error) {
        return res.json({success : false, message : error.message});
    }

}

export const updateLastDateOpened = async (req, res) => {
    const {flashcardId} = req.body;

    if (!flashcardId) {
        return res.json({success:false, message: "Id required"})
    }

    try {

        const userData = await userFlashcards.findById((flashcardId))

        if (!userData) return res.json({success:false, message : "Document not found from Id"});

        userData.lastDateOpened = Date.now();
        await userData.save();

        return res.status(201).json({success: true, message : "lastDateOpened Field Updated Successfully "})

    } catch (error) {
        return res.json({success : false, message : error.message});
    }
}

export const matchingElementsByTitle = async (req, res) => {
    const {email, str} = req.body;

    if (!email || !str) {
        return res.json({success:false, message: "Email and Id Required"})
    }

    try {
        const re = new RegExp(`${str}`,"i")
        const data = await userFlashcards.find({"title" : {$regex : re}});
        if (!data) return res.json({success : false, message : `No Matches for ${str}`})
        return res.json({success: true, message : `Match for element: ${str}, found`, data : data}); // Returns empty array if there is no match 
    } catch(error) {
        return res.json({success : false, message : error.message});
    }
}

export const updateFlashcardById = async (req,res) => {
    const {flashcardId, title, description, terms, definitions} = req.body;

    if (!flashcardId || !title || !description || !terms || !definitions)  {
        return res.json({success:false, message: "FlashcardId, title, description, terms, and definitions are required"})
    }

    try {
        const data = await userFlashcards.updateOne({"_id" : flashcardId}, {
            $set : {
                title : title,
                description:description,
                terms:terms,
                definitions : definitions, 
                lastDateOpened:Date.now()}

        });
        if (!data) return res.json({success : false, message : `Error Updating Flashcard`})
        //data.save();
        return res.json({success: true, message : `Flashcard Updated Successfully`, data : data}); // Returns empty array if there is no match 

    } catch (error) {
        return res.json({success : false, message : error.message});
    }



}

/**
 * Methods that need to be done 
 * 
 * 
 * 
 * timerFunction that logs the time that the user enters and exits the page (Might need a third db for this fk )
 */