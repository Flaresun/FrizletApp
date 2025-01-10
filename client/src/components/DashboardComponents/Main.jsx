import React, { useContext, useEffect, useState } from 'react'
import { TbCards } from "react-icons/tb";
import FlashCards from '../../assets/Flashcards';
import GraphData from './utils/GraphProgress';
import Chart from 'chart.js/auto';
import { AppContent } from '../../context/AppContext';
import axios from "axios";
import { TfiFaceSad } from "react-icons/tfi";


const Main = () => {

  const days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const time = ["5","10","3","10","5","4", "8"]
  const [graph, setGraph] = useState("");
  const {backendUrl, userData} = useContext(AppContent);
  const [latestFlashcards, setLatestFlashcards] = useState([]);

  /**
   * When the page is loaded here is the lifecycle of these following functions 
   * 
   * 1) setTimeout is set for 0.5s. This means that in 0.5 seconds, our graph will be displayed
   * 2) useEffect is called but upon seeing that our graph is just a string, the graph.$context will return undefined, a falsy value 
   * 3) 0.5 seconds have passed and the graph is displayed. Due to useState, our graph variable is set to the Chart, calling useEffect,
   * 4) useEffect is called and this time the graph is not a string. So it clears the timeout function preventing it from running ever again
   * 5) Now the changeGraphData is attached to a button and when clicked, will reload the graph. 
   * 6) Whilst not added now, upon clicking that button, new data will be loaded and then the useEffect will rerender the page
   * 
   */
    Chart.defaults.color = "#111112";


    const timeOut = setTimeout(() => {
      !graph.$context && setGraph(new Chart("myDiv",GraphData));
    }, 500)

  const changeGraphData = () => {
    graph.$context && graph.destroy();
    setGraph(new Chart("myDiv",GraphData)); 

  } 

  const getLatestOpenedFlashcards = async () => {
    if (!userData && !userData.email) return;
    const {email} = userData;

    try {
      const {data} = await axios.post(backendUrl + "/api/user/get-flashcards-by-email", {email})
      if (!data) throw new Error("Data not returned");
      if (!data.success) throw new Error(data.message);

      // We only want to save the first 6; So we slice(0,5).
      // Note we must also reverse the array because items are returned in ascending order no matter what we set it to in backend
      const latestData = data.data.reverse();
      const end = 5; //  Set to 5 to return the 6 most recent opened flashcards 
      setLatestFlashcards(latestData.slice(0,end));
      
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    graph.$context && clearTimeout(timeOut)
  },[graph])

  useEffect(() => {
    getLatestOpenedFlashcards()
  },[userData])

  

  const itemSize = 30;
  return (
      
      <div className="max-h-full w-full  flex flex-col text-3xl pt-10 dark:text-slate-900">
          {/**First section about recent flashcards */}
          <div className="flex flex-col">
            <div className="flex  sm:justify-start sm:items-center justify-center ">
              <h1 className="text-2xl flex  ">Recent Flashcards</h1>
            </div>

            {latestFlashcards.length === 0 ? (
              <div className="flex flex-col sm:flex-row items-center justify-center text-center my-10 text-3xl">
                < TfiFaceSad size={40}/>
                <h1 className="mt-2 sm:mt-0 sm:pl-5">No Recent Flashcards Available</h1>
              </div>
            ) : (
              <div className="items-center justify-center grid grid-cols-1 sm:grid-cols-2 mt-5 gap-4 ">
                {latestFlashcards.map((value,index) => (
                  <div key={index} className="flex flex-row items-center hover:bg-slate-200 dark:hover:bg-slate-500 cursor-pointer active:bg-slate-300 dark:active:bg-slate-400">
                      <TbCards size={itemSize}/>
                      <div className="flex flex-col ml-3">
                        <p className="text-xl font-medium ">{value.title}</p>
                        <p className="text-lg font-light dark:text-slate-400">({value.terms.length}) terms</p>
                      </div>
                    </div>
                ))}
              </div>
            )}


          </div>
          
          {/**Second section about recent activity */}
          <div  className="flex flex-col mt-5 h-full">

            <div className="flex pb-2 text-2xl items-center justify-center">
              <h1 className="dark:text-slate-900">(Daily) Activity </h1>
            </div>

            <div className="flex flex-col items-center justify-between max-h-full">
              <div className="flex box-border relative w-full h-[40vh] lg:h-[30vh]">{/**h-[50vh] lg:h-[40vh] */}
                <canvas id='myDiv' className="flex p-0 m-0 max-w-full "></canvas>
              </div>

              <div className="flex items-center justify-center ">
                <button onClick={changeGraphData} className="max-h-full px-4 py-2 text-lg font-medium rounded-md bg-slate-200 dark:bg-slate-600 ">{`Swap to Daily`}</button>
              </div>
            </div>
            
              
          </div>  

      </div>
  )
}

export default Main