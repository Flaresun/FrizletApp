import React from 'react'
import LeftPanel from '../../components/DashboardComponents/LeftPanel'
import Navbar from '../../components/DashboardComponents/Navbar'
import Main from '../../components/DashboardComponents/Main'
import { RxHamburgerMenu } from "react-icons/rx";

const Dashboard = () => {

  // Dashboard should include these components
    // Main section of page: Welcome back (email name)
      // Recent flashcards used 
    // Search Bar to search for all your flashcards
    // Top right is donation to support dev and user profile thing 
      // On clicking to support user it should load settings, dark/light mode, logout, etc
    

  return (
    <div className='mx-[2rem] lg:mx-[3rem] pt-[2rem]'>{/**px-[3rem] lg:px-[8-rem] xl:px-[10rem] */}

      <div className="flex items-start justify-center ">  

        <div className="sticky top-8 h-[93vh] hidden md:flex items-center justify-center mr-10">
          <LeftPanel/>
        </div>


        
        
        <div className="flex flex-col w-full">
          <Navbar /> 
          <Main  />
        </div>
         
      </div>
      
    </div>
  )
}

export default Dashboard