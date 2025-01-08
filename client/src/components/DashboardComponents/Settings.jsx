import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import MyModal from './utils/MyModal';
import NotificationsModal from './utils/NotificationsModal';

const Settings = () => {
  const navigate = useNavigate();
  const iconSize = 30; 

  const [openThemeModal, setOpenThemeModal] = useState(false);
  const [openNoteModal, setOpenNoteModal] = useState(false);

  return (
    <div className=' relative dark:bg-slate dark:bg-gradient-to-br from-slate-900 to-slate-400 w-full h-[100vh] block '>
      <div className="h-full px-[2rem] lg:px-[3rem] p-[3rem] lg:p-[2rem] flex flex-col r  dark:bg-slate dark:bg-gradient-to-br from-slate-900 to-slate-400 max-h-full ">

        <div className=''>
          <div className="flex flex-row items-start justify-start py-5 w-full ">
              <img onClick={() => navigate("/dashboard")} src={assets.FrizletLogo} alt="" className="w-40  cursor-pointer " />
          </div>
        </div>
      {openThemeModal && 
        <MyModal openModal = {openThemeModal} setOpenModal={setOpenThemeModal}/>
      }

      {openNoteModal && 
      <NotificationsModal  openModal = {openNoteModal} setOpenModal={setOpenNoteModal}/>
      }

        <div className="flex mb-5 items-center justify-center  dark:text-slate-300">
          <p className="text-3xl sm:text-5xl font-semibold">Settings</p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center justify-center">        
          <div onClick={() => navigate("/profile")} className="flex p-3 mt-3 sm:w-full items-center justify-between  hover:bg-slate-300 cursor-pointer dark:hover:bg-slate-800 dark:text-slate-300 dark:active:bg-slate-700 rounded-full">
            <div className="flex">
              <FaUserAlt size={iconSize}/>
              <p className="text-xl font-medium mx-5">Account</p>
            </div>
            
            <MdKeyboardArrowRight size={iconSize} />
          </div>

          <div onClick={() => setOpenNoteModal((prev) => !prev)} className="flex p-3 mt-3 sm:w-full items-center justify-between hover:bg-slate-300 cursor-pointer dark:hover:bg-slate-800 dark:text-slate-300 dark:active:bg-slate-700 rounded-full">
            <div className="flex">
              <IoIosNotificationsOutline size={iconSize}/>
              <p className="text-xl font-medium mx-5">Notifications</p>
            </div>

            <MdKeyboardArrowRight size={iconSize} />
          </div>

          <div onClick={() => setOpenThemeModal((prev) => !prev)} className="flex p-3 mt-3 sm:w-full items-center justify-between hover:bg-slate-300 cursor-pointer dark:hover:bg-slate-800 dark:text-slate-300 dark:active:bg-slate-700 rounded-full">
            <div className="flex">
              <FaRegEye size={iconSize}/>
              <p className="text-xl font-medium mx-5">Apperance</p>
            </div>

            <MdKeyboardArrowRight size={iconSize} />
          </div>
          
          <div onClick={() => navigate("/privacy")} className="flex p-3 mt-3 sm:w-full items-center justify-between  hover:bg-slate-300 cursor-pointer dark:hover:bg-slate-800 dark:text-slate-300 dark:active:bg-slate-700 rounded-full">
            <div className="flex">
              <MdOutlinePrivacyTip size={iconSize}/>
              <p className="text-xl font-medium mx-5">Privacy</p>
            </div>

            <MdKeyboardArrowRight size={iconSize} />
          </div>

          <div onClick={() => navigate("/about")} className="flex p-3 mt-3 sm:w-full items-center justify-between hover:bg-slate-300 cursor-pointer dark:hover:bg-slate-800 dark:text-slate-300 dark:active:bg-slate-700 rounded-full">
            <div className="flex">
              <FaRegCircleQuestion size={iconSize}/>
              <p className="text-xl font-medium mx-5">About</p>
            </div>

            <MdKeyboardArrowRight size={iconSize} />
          </div>

          <div onClick={() => navigate("/contact")} className="flex p-3 mt-3 sm:w-full items-center justify-between hover:bg-slate-300 cursor-pointer dark:hover:bg-slate-800 dark:text-slate-300 dark:active:bg-slate-700 rounded-full">
            <div className="flex">
              <MdOutlineContactPhone size={iconSize}/>
              <p className="text-xl font-medium mx-5">Contact</p>
            </div>

            <MdKeyboardArrowRight size={iconSize} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings