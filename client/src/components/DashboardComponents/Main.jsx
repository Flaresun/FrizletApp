import React, { useEffect, useState } from 'react'
import { TbCards } from "react-icons/tb";
import FlashCards from '../../assets/Flashcards';
import GraphData from './utils/GraphProgress';
import Chart from 'chart.js/auto';

const Main = () => {

  const days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const time = ["5","10","3","10","5","4", "8"]
  const [graph, setGraph] = useState("");
  
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
    const timeOut = setTimeout(() => {
      setGraph(new Chart("myDiv",GraphData));
    }, 500)

  const changeGraphData = () => {
    graph.$context && graph.destroy();
    setGraph(new Chart("myDiv",GraphData)); 

  } 

  useEffect(() => {
    graph.$context && clearTimeout(timeOut)
  },[graph])

  
 

  const itemSize = 30;
  return (
    <div>
        
        <div className="flex flex-col text-3xl my-10">
            {/**First section about recent flashcards */}
            <div className="flex flex-col">
              <div className="flex  sm:justify-start sm:items-center justify-center">
                <h1 className="text-2xl flex  ">Recent Flashcards</h1>
              </div>
              <div className="items-center justify-center grid grid-cols-1 sm:grid-cols-2 mt-5 gap-4 ">

                {FlashCards.map((value,index) => (
                  <div key={index} className="flex flex-row items-center hover:bg-slate-200 cursor-pointer active:bg-slate-300">
                    <TbCards size={itemSize}/>
                    <div className="flex flex-col ml-3">
                      <p className="text-xl font-medium">({value.name})</p>
                      <p className="text-lg font-light">({value.length}) terms</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/**Second section about recent activity */}
            <div  className="flex flex-col mt-5 ">

              <div className="flex pb-2 text-2xl items-center justify-center">
                <h1 className="">(Daily) Activity </h1>
              </div>

              <div className="relative h-[50vh] lg:h-[40vh]">
                <canvas id='myDiv' className="flex p-0 m-0"></canvas>
              </div>

              <div className="flex items-center justify-center">
                <button onClick={changeGraphData} className="border px-4 py-2 text-lg font-medium rounded-md bg-slate-200">{`Swap to Daily`}</button>
              </div>
                
            </div>  

        </div>
    </div>
  )
}

export default Main