import React, { useContext } from 'react'
import LeftPanel from '../../components/DashboardComponents/LeftPanel'
import Navbar from '../../components/DashboardComponents/Navbar'
import { AppContent } from '../../context/AppContext'
const Privacy = () => {

    const {leftPanel,setLeftPanel} = useContext(AppContent);
    
    addEventListener("resize", (e) => {
      if (e.target.innerWidth > 768) {
        setLeftPanel(false);
      }
    });
  


  return (
    <div className='flex px-[2rem] lg:px-[3rem] p-[3rem] lg:p-[2rem] dark:text-slate-100 dark:bg-gradient-to-br from-slate-900 to-slate-400 overflow-y-hidden '>

        <div className="sticky top-0 h-[100vh] hidden md:flex items-center justify-center mr-10 ">
          <LeftPanel/>
        </div>

        
        
        
        <div className="flex flex-col w-full max-h-full">
          <Navbar search={false} message={false}/> 
          {leftPanel ? 
            <div id="panel" className=" h-[93vh] flex md:hidden items-center justify-center max-w-full"><LeftPanel /> </div>
            
          : 
            (
            <div className="flex flex-col items-center justify-center">
                <h1 className="flex items-center justify-center text-5xl">Privacy Policy</h1>
                <p className="">Last updated: Janurary 8, 2025</p>
                
              <div className="flex flex-col mt-10 text-xl items-center justify-center text-2xl">
                  <p className="">Your privacy is important to us. This Privacy Policy explains how we
                collect, use, and protect your personal information when you use our
                website.</p>
        
                <h2 className="pt-10">Information We Collect</h2>
                <ul>
                  <li>Personal information you provide to us, such as your name and email.</li>
                  <li>Usage data, including pages viewed and actions taken on the site.</li>
                  <li>Cookies and tracking data to enhance your experience.</li>
                </ul>

                <h2 className="pt-10">How We Use Your Information</h2>

                <ul>
                  <li>To provide and improve our services.</li>
                  <li>To communicate with you about updates and promotions.</li>
                  <li>To ensure security and prevent fraud.</li>
                </ul>

                <h2 className="pt-10">Sharing Your Information</h2>
                <p>
                  We do not share your personal information with third parties, except as
                  required by law or to provide services on your behalf.
                </p>

                <h2 className="pt-10">Your Choices</h2>
                <p className="">You can choose to disable cookies through your browser settings and opt
                  out of email communications by following the unsubscribe link in our
                  emails.
                </p>

                <h2 className="pt-10">Data Security</h2>
                <p className="">We implement appropriate technical and organizational measures to
                protect your personal information.</p>

                <h2 className="pt-10">Changes to This Privacy Policy</h2>
                <p className="">We may update this Privacy Policy from time to time. We encourage you
                    to review it periodically.
                </p>

                <h2 className="pt-10">Contact Us</h2>
                <p className="">If you have questions or concerns about this Privacy Statement or our data practices, please contact us at:
                </p>
                <p className="">Email : omeikeSeth@gmail.com</p>
        
              </div>
            </div>
            )
           
          }
          
        </div>

        
        
        

        


      
    </div>
  )
}

export default Privacy