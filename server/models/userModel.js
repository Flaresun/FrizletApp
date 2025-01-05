import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {type: String, required : true, unique: true},
    password : {type: String, required : true},
    verifyOtp : {type: String, default: ""},
    verifyOtpExpireAt : {type: Number, default: 0},
    isAccountVerified : {type: Boolean, default: false},
    resetOtp : {type: String, default: ""},
    resetOtpExpireAt : {type: Number, default: 0},
    isOtpReset : {type: Boolean, default: false}
    //cards : {type : Map, default: Map}
})


const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;