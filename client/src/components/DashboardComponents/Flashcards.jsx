import React, { useContext, useEffect, useState } from 'react'
import LeftPanel from '../../components/DashboardComponents/LeftPanel'
import Navbar from '../../components/DashboardComponents/Navbar'
import { AppContent } from '../../context/AppContext'
import userFlashCards from '../../assets/userFlashCards'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { TfiFaceSad } from "react-icons/tfi";

const Flashcards = () => {

  const {leftPanel,setLeftPanel, backendUrl, userData} = useContext(AppContent);
  const [flashcardData, setFlashcardData] = useState([]);
  const navigate = useNavigate();
      
  addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      setLeftPanel(false);
    }
  });

  const getFlashcardData  = async () => {
    if (!userData && !userData.email) return
    const email = userData.email
    try {
      const {data} = await axios.post(backendUrl + "/api/user/get-flashcards-by-email", {email});
      //const {data} = await axios.post(backendUrl + "/api/auth/login", {email, password})

      if (!data) throw new Error("Data not received");
      if (!data.success) throw new Error(data.message)
      setFlashcardData(data);

    } catch (error) {
      console.log(error)
    }
  }
  const handleNavigation = (data) => {
    navigate(`id?q=${data._id}`)
  }

  useEffect(() => {
    getFlashcardData()
  },[userData])


  const {data} = flashcardData;
  if (!data) return 

  // id?q=1234
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
                <h1 className="flex items-center justify-center text-5xl">Your Flashcards</h1>

                {data.length === 0 ? (
                  <div className="flex flex-col sm:flex-row items-center justify-center text-center my-10 text-3xl">
                    < TfiFaceSad size={40}/>
                    <h1 className="mt-2 sm:mt-0 sm:pl-5">No Flashcards Available</h1>
                  </div>
                )
                :
                (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5 mt-20">
                    {data.map((value, index) => (
                      <div onClick={() => handleNavigation(data[index])} key={index} className="flex flex-col items-center justify-between border dark:border-slate-300 border-slate-600 px-4 py-4 rounded-md cursor-pointer hover:border-purple-400  hover:scale-105 transition-all">
                        <h1 className="text-2xl font-medium">{value.title}</h1>
                        <p className="text-lg text-wrap text-center py-1">{value.description ? value.description : "No Description"}</p>
                        <div className="flex">
                          <p className="mr-5 ">{`${value.terms.length} Cards`}</p>
                          <p className="">{`Created by ${value.email}`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                

                <button onClick={() => navigate("/create-cards")}className="mt-10 p-4  border text-slate-300 dark:text-slate-800 dark:bg-slate-400 bg-slate-700 rounded-md active:scale-95">Create New Flashcard</button>

            </div>
            )
           
          }
          
        </div>
      
    </div>
  )
}

export default Flashcards