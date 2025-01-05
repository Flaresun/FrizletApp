import React from 'react'
import { assets } from '../../assets/assets'
import { IoMdHome } from "react-icons/io";
import { PiCardsThree } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { FaDonate } from "react-icons/fa";
import { VscHistory } from "react-icons/vsc";


const LeftPanel = () => {
        // Left side bar : Left side bar with the following : Overview, Flashcards, Settings, Donate, About, 

        const size = 30;

  return (
    <div className="h-full  flex flex-col text-lg font-sm items-center justify-between bg-slate-400 rounded-md ">

        <div className=''>
            <div className="flex flex-row items-center justify-center py-5 w-full">
                <img src={assets.FrizletLogo} alt="" className="w-24" />
                <p className="text-2xl font-medium">Frizlet</p>
            </div>
        </div>
        

        <div className='max-h-full flex flex-col items-center mx-4 cursor-pointer'>
            {/**DIVIDER */}

            <div className="flex flex-row items-center justify-center text-center px-2 rounded-lg py-5  w-full hover:bg-slate-100 active:bg-slate-200 ">
                <IoMdHome size={size} />
                <p className="ml-5">Overview</p>
            </div>
            {/**DIVIDER */}

            <div className="flex flex-row items-center justify-center px-5 rounded-2xl py-5 w-full hover:bg-slate-100 active:bg-slate-200 ">
                <PiCardsThree size={size} />
                <p className="ml-5">Flashcards</p>
            </div>
            {/**DIVIDER */}

            <div className="flex flex-row items-center justify-center px-5 rounded-2xl p-5 w-full hover:bg-slate-100 active:bg-slate-200">
                <CiSettings size={size} />
                <p className="ml-5">Settings</p>
            </div>
            {/**DIVIDER */}

            <div className="flex flex-row items-center justify-center px-5 rounded-2xl p-5 w-full hover:bg-slate-100 active:bg-slate-200">
                <FaDonate size={size} />
                <p className="ml-5">Donate</p>
            </div>
            {/**DIVIDER */}
            
            <div className="flex flex-row items-center justify-center px-5 rounded-2xl p-5 w-full hover:bg-slate-100 active:bg-slate-200">
                <VscHistory size={size} />
                <p className="ml-5">About</p>
            </div>
            {/**DIVIDER */}
            

        </div>

        <div className='max-h-full'>
            <div className="flex flex-row items-center justify-center py-5 w-full ">
                <button className="mx-5 border rounded-lg  px-9 py-2 hover:bg-slate-100 active:bg-slate-200 hover:scale-105 active:scale-95">Contact</button>
            </div>
        </div>


    </div>
  )
}

export default LeftPanel