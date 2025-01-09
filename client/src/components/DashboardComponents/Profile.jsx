import React, { useContext, useEffect, useState } from 'react'
import LeftPanel from './LeftPanel';
import { AppContent } from '../../context/AppContext';
import Navbar from '../../components/DashboardComponents/Navbar'

const Profile = () => {
  const {userData} = useContext(AppContent);
  const userName = userData.email.split("@")[0]   
  let userTag  = userName.split("")[0].toUpperCase()

  const [fileInput, setFileInput] = useState(document.getElementById("fileInput"))

  setTimeout(() => {
    setFileInput(document.getElementById("file-upload"));
  },500)

  useEffect(() => {
  },[fileInput])

  fileInput && fileInput.addEventListener("change" ,(e) => {
    console.log(e.target.value)
  })

  const {leftPanel,setLeftPanel} = useContext(AppContent);
      
  addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      setLeftPanel(false);
    }
  });

  const handleSubmit = () => {
    ;
  }


  return (
    <div className='flex px-[2rem] lg:px-[3rem] p-[3rem] lg:p-[2rem] '>

      <div className="sticky top-0 hidden md:flex items-center justify-between mr-10">
          <LeftPanel/>
      </div>

      <div className="flex flex-col items-center justify-center  w-full text-center sm:justify-around sm:items-end ">

      
        <Navbar search={false} message={false}/> 
        {leftPanel ?
        
        <div id="panel" className=" h-[93vh] flex md:hidden items-center justify-center max-w-full w-full mr-0"><LeftPanel /> </div>

        : 

          (
        <div className="flex flex-col ml-10  w-full max-h-full dark:text-slate-300 sm:mr-0 mr-10">    
          
          {/**user nav */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
            {/**User Img */}
            <div className="flex flex-col justify-normal">
              <label id="fileInput" htmlFor="file-upload" className="flex w-40 h-40 bg-slate-400 cursor-pointer dark:bg-slate-900 dark:text-slate-300 rounded-full items-center justify-center text-center text-7xl font-light">{userTag}</label>
              <input type="file" id="file-upload" className='hidden'/>
              <p className="flex items-center justify-center">Upload your avatar</p>
            </div>
            {/**user name and email  */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-4xl mb-3">{userName}</p>

              <div className="flex">
                <p className="text-xl mb-3">{userData.email} - User </p>
              </div>
            </div>
                        
            {/**Extra For justify Between */}
            <div className="flex"></div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="flex items-center justify-center text-center w-full text-3xl my-5 sm:mt-5">Account</h1>

            <div className="sm:flex items-start justify-around h-full">
              <div className="hidden sm:flex flex-col items-center justify-between text-xl font-medium">
                <p className="py-4 flex items-center justify-center text-center">Username</p>
                <p className="py-4 flex items-center justify-center text-center">Email <span className="text-red-600">*</span></p>
                <p className="py-4 flex items-center justify-center text-center">Address <span className="text-red-600"></span></p>
                <p className="py-4 flex items-center justify-center text-center">Title <span className="text-red-600"></span></p>
                <p className="py-4 flex items-center justify-center text-center">Date of Birth </p>

              </div>
              <form onChange={handleSubmit} action="" className="flex flex-col">
                <input type="text" className="w-full mb-5 border rounded-md px-4 py-2 outline-none hover:w-full md:w-full bg-transparent"  defaultValue={userName}  />
                <input type="email" className="mb-5 border rounded-md px-4 py-2 outline-none hover:w-full md:w-full bg-transparent"   defaultValue={userData.email}  />
                <input type="address" className="mb-5 border rounded-md px-4 py-2 outline-none hover:w-full md:w-full bg-transparent" placeholder='Address' />
                <input type="text" className="mb-5 border rounded-md px-4 py-2 outline-none hover:w-full md:w-full bg-transparent" placeholder='Title'  />
                <input type="date" className="mb-5 border rounded-md px-4 py-2 outline-none hover:w-full md:w-full bg-transparent" placeholder=''  />

                <input type="submit" className="px-4 py-2 cursor-pointer dark:bg-slate-600 rounded-md dark:text-slate-200 items-center justify-center active:dark:bg-slate-500 active:scale-95" value='Save' />
              </form>
            </div>
          </div>

          
        </div>
        )}
      </div>
    </div>
  )
}

export default Profile