import React from 'react'
import { assets } from '../../assets/assets'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const itemSize = 30;
  const navigate = useNavigate();
  return (
    <div className='px-[2rem] lg:px-[3rem] p-[3rem] lg:p-[2rem]  '>{/** h-lvh */}

      <div className=''>
                <div className="flex flex-row items-start justify-start pt-5 w-full ">
                    <img onClick={() => navigate("/dashboard")} src={assets.FrizletLogo} alt="" className="w-40  cursor-pointer " />
                </div>
      </div>
      <div className="flex flex-col items-center justify-center dark:text-slate-300 min-[320px]:text-center">
        <div className="flex">
          <h1 className="text-4xl sm:text-5xl">About US</h1>
        </div>
        <div className="flex flex-col sm:flex-row-reverse mt-10 items-start justify-around flex-wrap lg:flex-nowrap">

          <div className="flex w-full ">
            <img src={assets.aboutLogo} alt="" className="" />
          </div>

          <div className="flex flex-col items-center text-center w-full pl-5 justify-between">
            <p className="text-3xl sm:text-4xl">On a Mission to Improve Software Development Skills to Aid Consumers Everywhere</p>
            <p className="mt-5 text-xl">The Frizlet App is an mock Quizlet App. The goal of this is to improve my prsonal skills as a software developer while also giving me tools to show to potential employers and customers. </p>
            <p className="mt-5 text-xl">This is one of my Full Stack Projects in which the goals is to allow for students to be able to study on this website with fully functional features and quick support through many contact details if needed </p>
            <p className="mt-5 text-xl">Thanks for visiting my project website. My name is Seth Omeike and if you would like to reach out or see more, feel free to click on any of the links below </p>

            <div className="flex flex-col sm:flex-row items-center justify-between w-full px-10 py-5 ">
              <a href="https://github.com/Flaresun" className="flex flex-col items-center text-center cursor-pointer hover:text-sky-500 active:text-sky-300 active:scale-95 ">
              <FaGithub size={itemSize}/>
              <p className="">Github</p>

              </a>
              <a href='https://www.linkedin.com/in/seth-omeike-1a2681260/' className="sm:mt-0 mt-5 flex flex-col items-center text-center cursor-pointer hover:text-sky-500 active:text-sky-300 active:scale-95">
              < FaLinkedin size={itemSize}/>
              <p className="">LinkedIn</p>

              </a>
              <div onClick={()=> navigate("/contact")} className="sm:mt-0 mt-5 flex flex-col items-center text-center cursor-pointer hover:text-sky-500 active:text-sky-300 active:scale-95">
              < MdOutlineEmail size={itemSize}/>
              <p className="">Email</p>

              </div>
              <div onClick={()=> navigate("/contact")} className="sm:mt-0 mt-5 flex flex-col items-center text-center cursor-pointer hover:text-sky-500 active:text-sky-300 active:scale-95">
              < FaPhone size={itemSize}/>
              <p className="">(216)-239-9450</p>
              </div>  
            </div>

          </div>
        </div>



      </div>
    </div>
  )
}

export default About