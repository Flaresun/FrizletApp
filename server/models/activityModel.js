import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    email : {type: String, required : true, unique: true},
    janurary : {type : Array, required: true, default: Array(7).fill([0])}, // Indexes represent the week 
    february : {type : Array, required: true, default: Array(7).fill([0])},
    march : {type : Array, required: true, default: Array(7).fill([0])},
    april : {type : Array, required: true, default: Array(7).fill([0])},
    may : {type : Array, required: true, default: Array(7).fill([0])},
    june : {type : Array, required: true, default: Array(7).fill([0])},
    july : {type : Array, required: true, default: Array(7).fill([0])},
    august : {type : Array, required: true, default: Array(7).fill([0])},
    september : {type : Array, required: true, default: Array(7).fill([0])},
    october : {type : Array, required: true, default: Array(7).fill([0])},
    november : {type : Array, required: true, default: Array(7).fill([0])},
    december : {type : Array, required: true, default: Array(7).fill([0])},

})


const activityModel = mongoose.models.activity || mongoose.model("activity",activitySchema);

export default activityModel;