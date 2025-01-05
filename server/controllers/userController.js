import userModel from "../models/userModel.js";

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