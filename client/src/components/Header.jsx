import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContent } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {userData} = useContext(AppContent);

  const navigate = useNavigate();

  return (
    <div className="px-[3rem] lg:px-[8-rem] xl:px-[10rem] flex flex-col">

    
      <div className="flex sm:flex-row items-center justify-between flex-col-reverse text-gray-800">
        
        <div className=" flex flex-col mt-20 sm:mt-10  text-gray-800">
          <h1 className="max-w-md flex items-center text-4xl lg:text-7xl text-wrap font-bold mb-5">
            Advanced studies begin here.
          </h1>

            <p className="mb-8 max-w-md font-medium sm:text-xl text-lg">Become an expert on whatever subject you are studying with the help of Frizlet's flashcards, fun games, and practice exams!</p>
            <button onClick={()=>navigate("/login")} className=" flex flex-row items-center justify-center sm:w-1/3 border border-gray-500  rounded-md py-2.5 hover:bg-gradient-to-l hover:from-green-500 hover:to-blue-500 transition-all text-nowrap font-medium bg-gradient-to-l from-blue-500 to-green-500 hover:scale-105 active:scale-95 ">
            Get Started
            </button>
        </div>
        <div className="flex">
          <img src={assets.header_img} alt="" className="" />
            
        </div>
        
      </div>

      <div className="flex text-md my-10 text-medium items-center justify-center ">
        Frizlet App is supporting students worldwide in their education 
      </div>

      <div className="flex flex-row items-center justify-between transition-all">
        <img src={assets.usLogo} alt="" className="w-12 sm:w-16 lg:w-20  hover:scale-105 transition-all" />
        <img src={assets.chinaLogo} alt="" className="w-12 sm:w-16 lg:w-20 hover:scale-105 transition-all" />
        <img src={assets.australiaLogo} alt="" className="w-12 sm:w-16 lg:w-20 hover:scale-105 transition-all" />
        <img src={assets.europeLogo} alt="" className="w-12 sm:w-16 lg:w-20 hover:scale-105 transition-all" />
        <img src={assets.nigeriaLogo} alt="" className="w-12 sm:w-16 lg:w-20 hover:scale-105 transition-all" />

      </div>
    </div>
  )
}

export default Header