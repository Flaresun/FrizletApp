import React, { useContext } from 'react'
import LeftPanel from '../../components/DashboardComponents/LeftPanel'
import Navbar from '../../components/DashboardComponents/Navbar'
import { AppContent } from '../../context/AppContext'
import userFlashCards from '../../assets/userFlashCards'
import { useNavigate } from 'react-router-dom'
const Flashcards = () => {

  const {leftPanel,setLeftPanel} = useContext(AppContent);
  const navigate = useNavigate();
      
  addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      setLeftPanel(false);
    }
  });

  return (
    <div className='flex px-[2rem] lg:px-[3rem] p-[3rem] lg:p-[2rem] '>

        <div className="sticky top-0 hidden md:flex items-center justify-between mr-10 ">
          <LeftPanel/>
        </div>

        <div className="flex flex-col w-full max-h-full">
          <Navbar search={true} message={false}/> 
          {leftPanel ? 
            <div id="panel" className=" h-[93vh] flex md:hidden items-center justify-center max-w-full"><LeftPanel /> </div>
            
          : 
            (
            <div className="flex flex-col items-center justify-center dark:text-slate-200">
                <h1 className="flex items-center justify-center text-5xl">Flashcards</h1>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-20 mt-20">

                  {userFlashCards.map((value, index) => (
                    <div key={index} className="flex flex-col items-center justify-between border dark:border-slate-300 border-slate-600 px-4 py-4 rounded-md cursor-pointer hover:border-purple-400  hover:scale-105 transition-all">
                      <h1 className="text-2xl font-medium">{value.name}</h1>
                      <p className="text-lg text-wrap text-center py-1">{value.desc ? value.desc : "No Description"}</p>
                      <div className="flex">
                        <p className="mr-5 ">{`${value.length} Cards`}</p>
                        <p className="">{`Created by ${value.createdBy}`}</p>
                      </div>
                    </div>
                  ))}
               
                </div>

                <button onClick={() => navigate("/create-cards")}className="mt-10 p-4  border text-slate-300 dark:text-slate-800 dark:bg-slate-400 bg-slate-700 rounded-md active:scale-95">Create New FlashCard</button>

            </div>
            )
           
          }
          
        </div>
      
    </div>
  )
}

export default Flashcards