import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();

  return (
    <div className='px-[3rem] lg:px-[8-rem] xl:px-[10rem] flex flex-col mt-20 mb-6'>

        <div className="flex bg-slate-300 w-full h-[1px] mb-5"></div>

        <div className="flex flex-col items-center sm:flex-row sm:items-start justify-between ">

            <div className="flex flex-col items-center">
                <h1 className="font-bold text-lg mb-5">About Us</h1>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">About Frizlet</p>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Careers</p>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Get the App</p>
                
            </div>

            <div className="flex flex-col items-center">
                <h1 className="font-bold text-lg mb-5">For Students Worldwide</h1>
                <p onClick={()=>navigate("/login")} className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Begin Studying</p>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Notes Available </p>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Reach out to Tutors</p>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Frizlet Unlimited </p>

            </div>

            <div className="flex flex-col items-center">
                <h1 className="font-bold text-lg mb-5">For Teachers Worldwide</h1>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Teaching with Frizlet </p>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Tutoring Careers</p>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Frizlet Unlimited</p>
            </div>

            <div className="flex flex-col ">
                <h1 className="font-bold text-lg mb-5">For Businesses</h1>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Partner with Frizlet App</p>

            </div>

            <div className="flex flex-col items-center">
                <h1 className="font-bold text-lg mb-5">Languages</h1>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">English</p>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">Spanish</p>
                <p className="font-sm text-sm mb-3 hover:cursor-pointer active:underline active:decoration-blue-600">French</p>
            </div>

        </div>

        <div className="mt-5 text-sm @">
            © Created by Seth Omeike
        </div>
        
    </div>
  )
}

export default Footer