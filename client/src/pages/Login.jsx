import React, { useContext, useState,useEffect } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import axios from "axios";
import { toast } from 'react-toastify';

const Login = () => {
// SAVE STATE IN LOCAL CACHE ***************************************************************
  const navigate = useNavigate();
  const {backendUrl, setIsLoggedin, getUserData, isLoggedin, userData} = useContext(AppContent);

  const [state, setState] = useState("Sign up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {

    try {
      e.preventDefault();

      // Get axios to also send cookies with request
      axios.defaults.withCredentials = true;

      if (state === "Sign up") {
        // Sign up API Call
        const {data} = await axios.post(backendUrl + "/api/auth/register", {email, password})

        if (!data.success) {
          throw new Error(data.message)
        }

        setIsLoggedin(true);
        getUserData();
        navigate("/email-verify"); // EVENTUALLY CHANGE THIS TO EMAIL-VERIFY 

      } else {
        // Login API CALL
        const {data} = await axios.post(backendUrl + "/api/auth/login", {email, password})

        
        if (!data.success) {
          throw new Error(data.message)
        }

        setIsLoggedin(true);
        await getUserData();
        navigate("/dashboard");
      }
    } catch(error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
      isLoggedin && userData && userData.isAccountVerified && navigate("/dashboard")
    },[isLoggedin, userData])

    useEffect(() => {
      isLoggedin && userData && !userData.isAccountVerified && navigate("/email-verify")
    },[isLoggedin, userData])

  

  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-slate-900 to-slate-400'>
      <img onClick={()=>navigate("/")} src={assets.FrizletLogo} alt="" className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer" />
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-slate-300 text-sm">

        <h2 className="text-3xl font-semibold text-white text-center mb-3">{state === "Sign up" ? "Create Account" : "Login"}</h2>
        <p className="text-center text-sm mb-6">{state === "Sign up" ? "Create your account!" : "Login to your account!"}</p>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <img src={assets.mail_icon} alt="" className="" />
            <input onChange={e => setEmail(e.target.value)} value={email}  type="email" placeholder="Email id" className="bg-transparent outline-none text-white" required/>
          </div>

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <img src={assets.lock_icon} alt="" className="" />
            <input   onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="bg-transparent outline-none text-white" required/>
          </div>

          {state !== "Sign up" && (
            <p onClick={()=> navigate("/reset-password")} className="mb-4 text-slate-400 cursor-pointer active:text-slate-600">Forgot Password?</p>
          )}
          <button className="mt-5 w-full py-2.5 rounded-full bg-gradient-to-r fromslate-500 to-slate-900 text-white font-medium">{state}</button>

          {state === "Sign up" ? (
            <p className="text-gray-400 text-center text-xs mt-4">Already have an account? {" "}
              <span onClick={() => setState("Login")}className="text-blue-400 cursor-pointer underline">Login here</span>
            </p>
          ) : (
              <p className="text-gray-400 text-center text-xs mt-4">Don't have an account? {" "}
                <span onClick={() => setState("Sign up")} className="text-blue-400 cursor-pointer underline">Sign up</span>
              </p>
          )}
          

          
        </form>

        

        

      </div>
    </div>
  )
}

export default Login