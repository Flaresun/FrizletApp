import React, { useContext, useEffect } from 'react'
import LeftPanel from '../../components/DashboardComponents/LeftPanel'
import Navbar from '../../components/DashboardComponents/Navbar'
import Main from '../../components/DashboardComponents/Main'
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContent } from '../../context/AppContext';
import { toast } from 'react-toastify';

const Dashboard = () => {

  
  /**
   * Next Steps ****************
   * Hard:
    * 
    * Donate Page
    * Daily Activity 
    *
   */
  const {leftPanel,setLeftPanel} = useContext(AppContent);
  
  addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      setLeftPanel(false);
    }
  });

  

  return (
    <div className='px-[2rem] lg:px-[3rem] p-[3rem] lg:p-[2rem] '>{/**px-[3rem] lg:px-[8-rem] xl:px-[10rem] */}

      <div className="flex items-start justify-center  ">  

        <div className="sticky top-8 h-[93vh] hidden md:flex items-center justify-center mr-10">
          <LeftPanel/>
        </div>

        
        
        
        <div className="flex flex-col w-full max-h-full">
          <Navbar search={true} message={true} /> 
          {leftPanel ? 
            <div id="panel" className=" h-[93vh] flex md:hidden items-center justify-center max-w-full"><LeftPanel /> </div>
            
          : 
            <Main  />
           
          }
          
        </div>

         
      </div>
      
    </div>
  )
}

export default Dashboard