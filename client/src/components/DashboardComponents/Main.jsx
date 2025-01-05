import React from 'react'
import { TbCards } from "react-icons/tb";
import FlashCards from '../../assets/Flashcards';
import Plotly from 'plotly.js/dist/plotly.js';

const Main = () => {

  const days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const time = ["5","10","3","10","5","4", "8"]
  
 
  
  setTimeout(() => {
    Plotly.newPlot('myDiv', data, layout, {displayModeBar: false,staticPlot: true});
  },500);
  
  
  const itemSize = 30;
  return (
    <div>
        <div className="flex flex-col text-3xl mt-10">
            {/**First section about recent flashcards */}
            <div className="flex flex-col ">
              <div className="flex items-start justify-start">
                <h1 className="">Recent Flashcards</h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-4 ">

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
            <div  className="w-full flex flex-col mt-5 ">

              <div id='myDiv' className="flex p-0 m-0"></div>

              <div className="flex items-center justify-center">
                <button className="border p-4 text-lg font-medium rounded-full bg-slate-200">{`Swap to (Month)`}</button>
              </div>
                
            </div>  

        </div>
    </div>
  )
}

export default Main