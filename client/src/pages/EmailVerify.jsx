import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const EmailVerify = () => {

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const {backendUrl, isLoggedin, userData, getUserData} = useContext(AppContent);
  // For multiple inputs 
  const inputRefs = useRef([]);

  const handleInput = (e,index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length -1) {
      inputRefs.current[index+1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index-1].focus();
    }
  }

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char,index)=> {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }

    })
  }

  const onSubmitHandler = async (e) => {

    try {
      e.preventDefault();
      const otpArray = inputRefs.current.map(e => e.value);
      const otp = otpArray.join("");

      const {data} = await axios.post(backendUrl + "/api/auth/verify-account", {otp})

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success(data.message);
      await getUserData();
      navigate("/dashboard");

    } catch(error) {
      toast.error(error.message);
    }
  }


  const sendVerificationOtp = async () => {
    try {

      axios.defaults.withCredentials = true;

      const {data} = await axios.post(backendUrl + "/api/auth/send-verify-otp");

      if (data.success) {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    sendVerificationOtp()
  },[])





  useEffect(() => {
    isLoggedin && userData && userData.isAccountVerified && navigate("/dashboard")
  },[isLoggedin, userData])

  useEffect(() => {
    !isLoggedin && navigate("/")
  },[isLoggedin, userData])


  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-400'>
      <img onClick={()=>navigate("/")} src={assets.FrizletLogo} alt="" className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer" />

      <form onSubmit={onSubmitHandler} action="" className="bg-slate-900 p-8 rounded-lg shadow-g w-96 text-sm">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">Email Verify OTP</h1>
        <p className="text-center mb-6 text-slate-300">Enter the 6-digit code sent to your email id. </p>

        <div onPaste={(e) => handlePaste(e)} className="flex justify-between mb-8">
          {Array(6).fill(0).map((_,index)=> (
            <input type="text" maxLength="1" key={index}
             className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md " required
             ref={e => inputRefs.current[index] = e}
             onInput={(e) => handleInput(e,index)}
             onKeyDown={(e) => handleKeyDown(e,index)}
             />
          ))}
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-slate-900 to-slate-400 rounded-full">Verify Email</button>
        <p onClick={sendVerificationOtp} className="text-slate-400 text-center underline mt-2 cursor-pointer active:decoration-blue-500 ">Resend OTP</p>
      </form>

      
    </div>
  )
}

export default EmailVerify 