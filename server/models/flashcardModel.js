import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema({
    flashcardId : {type : String, required : true, unique: true},
    email : {type: String, required : true},
    terms : {type: Array, required : true},
    definitions : {type: Array, required : true},
    title : {type: String, required : true},
    description : {type: String, required : true},
    dateOfCreation : {type : Number, default : Date.now()},
    lastDateOpened : {type : Number, default : Date.now()},
    isPrivate : {type : Boolean, default : false},
    //cards : {type : Map, default: Map}
})


const userFlashcards = mongoose.models.flashcards || mongoose.model("flashcards",flashcardSchema);

export default userFlashcards;