import React, { useContext, useState } from 'react'
import {assets} from "../assets/assets.js"
import {useNavigate} from "react-router-dom";
import { AppContent } from '../context/AppContext.jsx';
import axios from "axios";
import { toast } from 'react-toastify';

const Navbar = () => {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContent);

  const logout = async () => {
    try {
        axios.defaults.withCredentials = true;
        const {data} = await axios.post(backendUrl + "/api/auth/logout");

        data.success && setIsLoggedin(false);
        data.success && setUserData(false);
        navigate("/")
    } catch (error) {
      toast.error(error.message);

    }
  }

  addEventListener('scroll', (e) => {
    setShow(false)
  })

  return (
    <div  className='px-[3rem] lg:px-[8-rem] xl:px-[10rem] py-5 flex flex-row items-center justify-between'> 
      <div className="flex items-center justify-center font-medium text-xl">
        <img src={assets.FrizletLogo} alt="" className='w-20 sm:w-20' />
        <p className="text-nowrap opacity-0 sm:opacity-100 sm:text-xl font-semibold ">Frizlet App</p>
      </div>
        
        {
          (
            <div className="flex flex-row-reverse justify-center items-center sm:text-xl gap-3 ">
              <button onClick={()=>navigate("/login")} className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 font-semibold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                Login <img src={assets.arrow_icon} alt="" className="" />
              </button>
              <div className="flex flex-col relative">
                
                <button onClick={()=>setShow(!show)} className="flex items-center font-semibold border px-3 sm:px-6 py-2 rounded-full text-nowrap hover:scale-105 hover:bg-slate-100 active:scale-95">Get Started</button>

                {show && 
                <ul className="flex flex-col absolute top-12 left-3 bg-slate-300 opacity-75 items-center text-center font-medium transition-all text-nowrap ">
                  <li onClick={()=>navigate("/login")} className="hover:bg-slate-600 w-full hover:cursor-pointer px-5">Flashcards</li>
                  <li onClick={()=>navigate("/login")} className="hover:bg-slate-600 w-full hover:cursor-pointer">Sign up</li>
                  <li onClick={()=>navigate("/login")} className="hover:bg-slate-600 px-3 w-full hover:cursor-pointer">Exam Prep</li>

                </ul>
                }
              </div>
              
            </div>
            
          )


          
        }
        
        
    </div>
  )
}

export default Navbar;