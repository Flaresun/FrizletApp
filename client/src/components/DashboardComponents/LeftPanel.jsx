import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { IoMdHome } from "react-icons/io";
import { PiCardsThree } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { FaDonate } from "react-icons/fa";
import { VscHistory } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../../context/AppContext';


const LeftPanel = () => {
    // Left side bar : Left side bar with the following : Overview, Flashcards, Settings, Donate, About, 

    const size = 30;
    const navigate = useNavigate();
    const {setLeftPanel} = useContext(AppContent);

    const navigateTo = (location) => {
        setLeftPanel(false);
        navigate(`/${location}`)
        ;
    }

    return (
        <div className="h-full w-full flex flex-col text-lg font-sm items-center justify-between bg-slate-400  dark:bg-gradient-to-br from-slate-900 to-slate-600 rounded-md dark:text-slate-300 ">

            <div className=''>
                <div className="flex flex-row items-center justify-center py-5 w-full">
                    <img src={assets.FrizletLogo} alt="" className="w-24" />
                    <p className="text-2xl font-medium">Frizlet</p>
                </div>
            </div>
            

            <div className='max-h-full w-full flex flex-col items-center mx-4 cursor-pointer'>
                {/**DIVIDER */}

                <div onClick={() => navigateTo("dashboard")} className=" flex flex-row items-center justify-center text-center px-2 rounded-lg py-5  w-full hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-600 ">
                    <IoMdHome size={size} />
                    <p className="ml-5">Overview</p>
                </div>
                {/**DIVIDER */}

                <div onClick={() => navigateTo("flashcards")} className="flex flex-row items-center justify-center px-5 rounded-2xl py-5 w-full hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-600 ">
                    <PiCardsThree size={size} />
                    <p className="ml-5">Flashcards</p>
                </div>
                {/**DIVIDER */}

                <div onClick={() => navigateTo("settings")} className="flex flex-row items-center justify-center px-5 rounded-2xl p-5 w-full hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-600">
                    <CiSettings size={size} />
                    <p className="ml-5">Settings</p>
                </div>
                {/**DIVIDER */}
                {/**NO DONATE PAGE FOR NOW 
                <div onClick={() => navigate("/donate")} className="flex flex-row items-center justify-center px-5 rounded-2xl p-5 w-full hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-600">
                    <FaDonate size={size} />
                    <p className="ml-5">Donate</p>
                </div>
                */}
                {/**DIVIDER */}
                
                <div onClick={() => navigateTo("about")} className="flex flex-row items-center justify-center px-5 rounded-2xl p-5 w-full hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-600">
                    <VscHistory size={size} />
                    <p className="ml-5">About</p>
                </div>
                {/**DIVIDER */}
                

            </div>

            <div className='max-h-full'>
                <div onClick={() => navigateTo("contact")} className="flex flex-row items-center justify-center py-5 w-full ">
                    <button className="mx-5 border rounded-lg  px-9 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-600 hover:scale-105 active:scale-95">Contact</button>
                </div>
            </div>


        </div>
    )
}

export default LeftPanel