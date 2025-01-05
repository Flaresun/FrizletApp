import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Main = () => {

    const navigate = useNavigate();

  return (
    <div className='px-[3rem] lg:px-[6-rem] xl:px-[8rem] bg-slate-100 flex flex-col font-medium py-20'>


        {/** TOP LEFT--IMG RIGHT--WORDS */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch mb-10 ">

            <img src={assets.appStore} alt="" className="border-4 border-green-500 shadow-2xl shadow-green-500 mb-12 lg:mb-0 lg:mr-[10rem]" />

            <div className="flex flex-col items-center justify-between px-5" >
                <h1 className=" font-bold text-3xl mb-10 lg:mb-0">Frizlet App Available Soon in the App Store </h1>
                <p className=" text-lg mb-10 lg:mb-0 font-medium ">Available soon in the app store so students can access Frizlet App wherever they are with their mobile devices. 
                Stay on track no matter where you are as Frizlet will always be available for daytime and nightime, stay at home or out time, serious or chill studying.
                </p>
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <button  className=" w-2/3 sm:w-1/3 text-lg font-medium p-3 hover:scale-105 active:scale-95 "><img src={assets.appStoreButton} alt="" className="" /></button>
                    <button className=" lg:mb-0 w-2/3 sm:w-1/3 text-lg font-medium p-3 hover:scale-105 active:scale-95 "><img src={assets.googlePlayButton} alt="" className="" /></button>

                </div>
            </div>

        </div>

        {/** MID LEFT--WORDS RIGHT--IMG */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch mt-0 sm:mt-16  mb-10 ">

            <img src={assets.notes} alt="" className="border-4 border-amber-100 shadow-2xl shadow-amber-500 mb-12 lg:mb-0  " />

            <div className="flex flex-col items-center justify-between px-5" >
                <h1 className=" font-bold text-3xl mb-10 lg:mb-0">Study hard with Frizlet App's Notes </h1>
                <p className=" text-lg mb-10 lg:mb-0 font-medium ">With the help of Frizlet top notch notes from students around the world and professors, users will be able to study 
                to their hearts content. Not only can one upload their own notes for a better study experience, you also have access to notes uploaded by others for a better study experience.
                </p>
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <button onClick={()=>navigate("/login")} className="border-2 border-slate-300 rounded-xl text-lg font-medium px-6 sm:px-8 py-3 text-nowrap 
                    hover:bg-gradient-to-l hover:from-slate-100 hover:to-amber-500 transition-all bg-gradient-to-l from-amber-500 to-slate-100 hover:scale-105 active:scale-95 ">Get Studying</button>

                </div>
            </div>

        </div>


        {/** BOTTOM LEFT--IMG RIGHT--WORDS */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch mt-0 mb:16 sm:mt-16 ">

            <img src={assets.exams} alt="" className="border-4 border-blue-500 shadow-2xl shadow-blue-500 mb-12 lg:mb-0 lg:mr-[10rem]" />

            <div className="flex flex-col items-center justify-between px-5" >
                <h1 className=" font-bold text-3xl mb-10 lg:mb-0">Ace your Exams </h1>
                <p className=" text-lg mb-10 lg:mb-0 font-medium ">Acing your exams has never been easier now with the help of Frizlet App. Study your topic to mastery and beyond, memorizing and understanding 
                    everything that you need to know in order to perform at your best in your exams. Remember, Frizlet has your back. 
                </p>
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <button onClick={()=>navigate("/login")} className="border-2 border-slate-300 rounded-xl text-lg font-medium px-6 sm:px-8 py-3  text-nowrap hover:bg-gradient-to-l
                    hover:from-slate-100 hover:to-blue-500 transition-all bg-gradient-to-l from-blue-500 to-slate-100 hover:scale-105 active:scale-95 ">Begin your Prep</button>


                </div>
            </div>

        </div>



        

        
        
    </div>
  )
}

export default Main