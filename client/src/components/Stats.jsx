import React from 'react'
import { assets } from '../assets/assets'

const Stats = () => {
  return (
    <div className='px-[3rem] lg:px-[8-rem] xl:px-[10rem] flex flex-col mt-20'>

        <div className="flex flex-col items-center justify-center text-center sm:px-20">
            <h1 className="flex text-3xl sm:text-5xl font-semibold items-center justify-center text-wrap mb-5">Guiding Students One Flashcard at a Time</h1>
            <p className="flex text-wrap text-lg font-medium sm:p-5 mb-5">
                In today’s fast-paced world, learning needs to be as efficient as it is engaging. Frizlet transforms the way students prepare, review, and master their subjects by providing an 
                intuitive platform to create, organize, and share flashcards. Whether you're studying for an exam, learning a new language, or brushing up on professional skills, Frizlet’s sleek
                 design and user-friendly features empower you to focus on what matters: achieving your learning goals, one flashcard at a time.
            </p>


        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between p-20 text-5xl">
            <div className="flex flex-col items-center justify-center font-medium mb-10">
                <h1 className="mb-5"><span className="text-slate-500">100%</span></h1>
                <p className="text-xl mb-10 text-slate-600 text-center">For the Students</p>
                <img src={assets.childrenLogo} alt="" className="w-[20rem]" />
                

            </div>
            <div className="w-[1px] h-[15rem] bg-slate-100 hidden sm:block"></div>
            <div className="flex flex-col items-center justify-center font-medium mb-10">
                <h1 className="mb-5"><span className="text-slate-500">130%</span></h1>
                <p className="text-xl mb-8 text-slate-600 text-center">Growth in Partnership with Schools Worldwide</p>
                <img src={assets.schoolLogo} alt="" className="w-[20rem]" />
            </div>
            <div className="w-[1px] h-[15rem] bg-slate-100 hidden sm:block"></div>
            <div className="flex flex-col items-center justify-center font-medium">
                <h1 className="mb-5"><span className="text-slate-500">60%</span></h1>
                <p className="text-xl mb-10 text-slate-600 text-center">Reduced Costs</p>
                <img src={assets.costLogo} alt="" className="w-[20rem]" />
            </div>
        </div>
        
    </div>
  )
}

export default Stats