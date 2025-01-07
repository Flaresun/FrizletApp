import React, { useContext, useRef, useState } from 'react'
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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import LeftPanel from './LeftPanel';
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    
    const {backendUrl, userData, setUserData,isLoggedin, setIsLoggedin, theme,setTheme,leftPanel, setLeftPanel} = useContext(AppContent);

    const userName = userData.email.split("@")[0]   
    const userTag  = userName.split("")[0].toUpperCase()
    const itemSize = 25;

    const [userActive, setUserActive] = useState(false);

    // If false then we are in dark mode 
    const [isLightMode, setIsLightMode] = useState(localStorage.getItem("theme") === "true"); 
    const [searchActive, setSearchActive] = useState(false);

    const navigate = useNavigate();


    const toggleMode = () => {
        setIsLightMode((prev) => !prev);
        // Also toggle local storage
        localStorage.setItem("theme", !isLightMode);
        setTheme((prev) => !prev);
    }

    const toggleUserActive = () => {
        setUserActive((prev) =>!prev)
    }

    addEventListener("mousedown", (e) => {
        // Note that every element in the modal was given the className modal
        // Also we have to check their parent to account for any edge cases especially due to the <path></path> not containing modal class
        !e.target.classList.contains("modal")  && !(e.target.nodeName === "path") && setUserActive(false)
    })

    addEventListener("scroll", (e) => {
        setUserActive(false);
    })

    const logout = async () => {
        try {
            const {data} = await axios.post(backendUrl + "/api/auth/logout");
            if (!data.success) {
                throw new Error(data.message);
            }

            toast.success("Successfully logged out!")
            setIsLoggedin(false);
            navigate("/login");
        } catch (error) {
            toast.error(error);
        }
    }

    const showLeftPanel = () => {
        setLeftPanel((prev) => !prev);
    }

    const showSearchBar = () => {
        window.innerWidth < 768 && setSearchActive((prev) => !prev)

        addEventListener("resize", (e) => {
            if (e.target.innerWidth > 768) {
                setSearchActive(false);
            }
          });
    }

    const [inputValue, setInputValue] = useState("");
    const handleInput = (e) => {
        setInputValue(e.target.value);
        
    }
    console.log(inputValue);



  return (
    <div className="flex flex-col">    
        <div  className="max-h-full flex items-center justify-between mr-3 dark:text-slate-300">
            <div className="hidden md:flex flex-col items-start justify-start font-light">
                <p className="text-xl mb-2">Welcome back,</p>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">{userName}</h1>
            </div>
            <div onClick={showLeftPanel} className="flex md:hidden cursor-pointer">
                        {leftPanel ? <IoClose size={60} />: <RxHamburgerMenu size={60} />}
            </div>

            <div onClick={showSearchBar}className="flex flex-row items-center justify-center text-center p-3 600 rounded-md shadow-md text-lg ">
                <button className='mx-3 cursor-pointer'><CiSearch size={30} /></button>
                <input type="text"  value={inputValue}  onInput={handleInput} className="outline-none w-0 hover:w-full md:w-full bg-transparent" placeholder='Search for your Flashcards'/>
            </div>

            <div className=" relative flex flex-col items-center justify-start font-light">
                <button onClick={toggleUserActive} className="modal items-center text-center flex justify-center bg-slate-200 dark:bg-slate-700 w-8 h-8 p-6 rounded-full text-xl">{userTag}</button>


                {userActive && 

                <div className="modal flex flex-col absolute top-16 items-start justify-start text-lg font-light  bg-slate-400 dark:bg-slate-800 py-4 rounded-md text-nowrap">
                    <div onClick={() => navigate("/profile")} className="modal flex flex-row w-full  hover:bg-slate-100 active:bg-slate-200  hover:text-slate-600 rounded-md cursor-pointer p-1">
                        <IoMdPerson size={itemSize} className='modal'/>
                        <p className="ml-3 modal">Profile</p>
                    </div>
                    <div onClick={() => navigate("/privacy")} className="modal flex flex-row w-full hover:bg-slate-100 active:bg-slate-200 hover:text-slate-600 rounded-md cursor-pointer p-1 ">
                        <MdOutlinePrivacyTip size={itemSize} className='modal'/>
                        <p className="modal ml-3">Privacy</p>
                    </div>
                    <div onClick={logout} className="modal flex flex-row w-full hover:bg-slate-100 active:bg-slate-200 rounded-md hover:text-slate-600 cursor-pointer p-1">
                        <IoIosLogOut size={itemSize} className='modal'/>
                        <p className="modal ml-3">Log Out</p>
                    </div>
                    <div onClick={toggleMode} className="modal flex flex-row w-full hover:bg-slate-100 active:bg-slate-200 rounded-md hover:text-slate-600 cursor-pointer p-1 ">
                        
                        {!isLightMode ? <MdOutlineWbSunny size={itemSize} className='modal'/> : <FaMoon size={itemSize} className='modal'/>}
                        <p className="modal ml-3">{!isLightMode ? "Light" : "Dark"} Mode</p>
                    </div>

                </div>

                }
            </div>
        </div>

        <div className="flex items-center justify-center">
            {searchActive && 
            <div className="flex flex-row items-center justify-center text-center p-3 600 rounded-md shadow-md text-lg dark:text-slate-300">
                    <input value={inputValue}  onInput={handleInput} type="text" className="outline-none w-full md:w-full bg-transparent" placeholder='Search for your Flashcards'/>
            </div>
            }
        </div>
    </div>
  )
}

export default Navbar