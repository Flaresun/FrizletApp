import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AppContent } from '../../context/AppContext';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

const Navbar = () => {

    const {userData}  = useContext(AppContent);
    const userName = userData.email.split("@")[0]   
    const userTag  = userName.split("")[0].toUpperCase()
    const itemSize = 25;

    const [userActive, setUserActive] = useState(false);

    // If false then we are in dark mode 
    const [isLightMode, setIsLightMode] = useState(true); 


    const toggleMode = () => {
        setIsLightMode((prev) => !prev);
    }
    const toggleUserActive = () => {
        setUserActive((prev) =>!prev)
    }

    addEventListener("mousedown", (e) => {
        // Note that every element in the modal was given the className modal
        !e.target.classList.contains("userTag") && !e.target.classList.contains("modal") && setUserActive(false)
    })

  return (
    <div>
        <div  className="flex items-center justify-between mr-3">
            <div className="hidden md:flex flex-col items-start justify-start font-light">
                <p className="text-xl mb-2">Welcome back,</p>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">{userName}</h1>
            </div>
            <div className="flex md:hidden cursor-pointer">
                      <RxHamburgerMenu size={60} />
            </div>

            <div className="flex flex-row items-center justify-center text-center p-3 600 rounded-md shadow-md text-lg ">
                <button className='mx-3 cursor-pointer'><CiSearch size={30} /></button>
                <input type="text" className="outline-none w-0 md:w-full" placeholder='Search for your Flashcards'/>
            </div>

            <div className=" relative flex flex-col items-center justify-start font-light">
                <button onClick={toggleUserActive} className="userTag items-center text-center flex justify-center bg-slate-200 w-8 h-8 p-6 rounded-full text-xl">{userTag}</button>


                {userActive && 

                <div className="modal flex flex-col absolute top-16 items-start justify-center text-lg font-light  bg-slate-400 py-4 pr-4 rounded-md text-nowrap">
                    <div className="modal flex flex-row items-center justify-center w-full hover:bg-slate-100 active:bg-slate-200 rounded-md cursor-pointer px-2">
                        <IoMdPerson size={itemSize} className='modal'/>
                        <p className="ml-3 modal">Profile</p>
                    </div>
                    <div className="modal flex flex-row items-start justify-center w-full hover:bg-slate-100 active:bg-slate-200 rounded-md cursor-pointer px-2">
                        <IoIosNotificationsOutline size={itemSize} className='modal'/>
                        <p className="modal ml-3">Notificatons</p>

                    </div>
                    <div className="modal flex flex-row items-start justify-center w-full hover:bg-slate-100 active:bg-slate-200 rounded-md cursor-pointer px-2">
                        <MdContactSupport size={itemSize} className='modal' />
                        <p className="modal ml-3">Contact Us</p>
                    </div>
                    <div className="modal flex flex-row items-start justify-center w-full hover:bg-slate-100 active:bg-slate-200 rounded-md cursor-pointer px-2 ">
                        <CiSettings size={itemSize} className='modal'/>
                        <p className="modal ml-3">Donate</p>
                    </div>
                    <div className="modal flex flex-row items-start justify-center w-full hover:bg-slate-100 active:bg-slate-200 rounded-md cursor-pointer px-2 ">
                        <MdOutlinePrivacyTip size={itemSize} className='modal'/>
                        <p className="modal ml-3">Privacy</p>
                    </div>
                    <div className="modal flex flex-row items-start justify-center w-full hover:bg-slate-100 active:bg-slate-200 rounded-md cursor-pointer px-2 ">
                        <IoIosLogOut size={itemSize} className='modal'/>
                        <p className="modal ml-3">Log Out</p>
                    </div>
                    <div onClick={toggleMode} className="modal flex flex-row items-start justify-center w-full hover:bg-slate-100 active:bg-slate-200 rounded-md cursor-pointer px-2 ">
                        
                        {isLightMode ? <MdOutlineWbSunny size={itemSize} className='modal'/> : <FaMoon size={itemSize} className='modal'/>}
                        <p className="modal ml-3">{isLightMode ? "Light" : "Dark"} Mode</p>
                    </div>

                </div>

                }
            </div>
        </div>
    </div>
  )
}

export default Navbar