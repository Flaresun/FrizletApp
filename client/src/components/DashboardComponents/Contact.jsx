import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Contact = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className='px-[2rem] lg:px-[3rem] p-[3rem] lg:p-[2rem] dark:bg-gradient-to-br from-slate-900 to-slate-400 '>

      <div className="flex">
        <img onClick={() => navigate("/dashboard")} src={assets.FrizletLogo} alt="" className="w-40 cursor-pointer" />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center text-5xl dark:text-slate-200 ">
          <h1 className="">CONTACT US</h1>
          <p className="text-sm pt-1">Frizlet App</p>
        </div>

        <div className="flex flex-col sm:flex-row mt-5 justify-around max-w-full lg:h-[82vh] dark:text-slate-200  overflow-x-none">
          {/**INPUTS  */}
          <div className="flex flex-col mb-5 sm:mb-0">
            <h1 className="text-3xl flex items-center text-center justify-center mb-5 lg:w-[100%]">User Details</h1>
            <form onSubmit={handleSubmit} action="" className='flex flex-col items-center justify-center sm:justify-around h-full w-full'>
              <input type="text" className="text-xl px-4 py-2 outline-none  bg-transparent border lg:w-[150%] w-full" placeholder='Name' required/>
              <input type="email" className="text-xl px-4 py-2 outline-none  bg-transparent border lg:w-[150%] mt-5 w-full" placeholder='Email' required/>
              <input type="tel" className="text-xl px-4 py-2 outline-none  bg-transparent border lg:w-[150%] mt-5 w-full" placeholder='Phone Number'/>
              <textarea type="text" className="text-xl px-4 py-2 outline-none  bg-transparent border lg:w-[150%] mt-5 w-full" placeholder='Message' required/>
              <input type="submit" value="Submit" className='mt-5 px-4 py-2 border cursor-pointer hover:bg-slate-300 lg:w-[150%] hover:text-slate-700 hover:active:bg-slate-200'/>
            </form>

          </div>

          {/**CONTACT DETAILS */}
          <div className="flex flex-col max-w-full">
            <div className="flex flex-col items-center  h-full">
              <h1 className="text-3xl mb-5">Contact Details</h1>

              <div className="flex flex-col items-center sm:justify-around h-full">

              
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-xl">omeikeSeth@gmail.com</h1>
                  <h1 className="">(216)-239-9450</h1>
                </div>  
                <div className="flex flex-col mt-5 text-center">
                  <p className="font-semibold text-xl">Cleveland</p>
                  <p className="">2315, Murray Hill Rd</p>
                  <p className="">Cleveland, OH 44143</p>
                </div>

                <div className="flex mt-5 text-center text-wrap text-clip">
                https://www.linkedin.com/in/seth-omeike-1a2681260/
                </div>

                <div className="flex mt-5 text-center text-wrap text-clip">
                https://github.com/Flaresun
                </div>
              </div>

            </div>

 
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact