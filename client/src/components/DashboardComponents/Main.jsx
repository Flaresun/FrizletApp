import React, { useContext, useEffect, useState } from 'react'
import { TbCards } from "react-icons/tb";
import FlashCards from '../../assets/Flashcards';
import GraphData from './utils/GraphProgress.jsx';
import Chart from 'chart.js/auto';
import { AppContent } from '../../context/AppContext';
import axios from "axios";
import { TfiFaceSad } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';


const Main = () => {

  const [graph, setGraph] = useState("");
  const {backendUrl, userData} = useContext(AppContent);
  const [latestFlashcards, setLatestFlashcards] = useState([]);
  const [isDay, setIsDay] = useState(true); // false impllies month 
  const navigate = useNavigate();

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
    // addGraphData
    Chart.defaults.color = "#111112";
    const days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [dayData, setDayData] = useState([])
    const [monthData, setMonthData] = useState([])
    
    const barColors = "#183a70"
    const windowWidth = window.innerWidth;
    
    const axis = windowWidth < 1000 ? "y" : "x"

    const addGraphDataDaily = async() => {
      const {email}  = userData;
      try {
        const {data} = await axios.post(backendUrl + "/api/user/get-data-by-week",{email})
        if (!data.success) {
          toast.error("Error Getting Data")
          return;
        }

        const res = {
          type: "bar",
          
          data : {
              labels : isDay ? days : months,
              datasets : [{
                  backgroundColor : barColors,
                  label : null,
                  data: data.data
              }]
          },
          options : {
              indexAxis: axis,
              maintainAspectRatio: false,
              skipNull : true,
              plugins : {
                  legend : {
                      display: false,
                  }
              }
          }
        };
        setDayData(res)

      } catch (error) {
        console.log(error)
      }
    }

    const addGraphDataMonthly = async() => {
      const {email}  = userData;
      try {
        const {data} = await axios.post(backendUrl + "/api/user/get-data-by-year",{email})
        if (!data.success) {
          toast.error("Error Getting Data")
          return;
        }
        
        const res = {
          type: "bar",
          data : {
              labels : months,
              datasets : [{
                  backgroundColor : barColors,
                  label : null,
                  data: data.data
              }]
          },
          options : {
              indexAxis: axis,
              maintainAspectRatio: false,
              skipNull : true,
              plugins : {
                  legend : {
                      display: false,
                  }
              }
          }
        };
        setMonthData(res)

      } catch (error) {
        console.log(error)
      }
    }


    const timeOut = setTimeout(() => {
      if (dayData.length === 0 || monthData.length ===0) return
      !graph.$context && setGraph(new Chart("myDiv", isDay ? dayData : monthData));
    }, 500)

  const changeGraphData = () => {
    setIsDay((prev) => !prev);
    graph.$context && graph.destroy();
    if (dayData.length === 0 || monthData.length ===0) return
    setGraph(new Chart("myDiv",!isDay ? dayData : monthData));  // The state always lags one step behind. So to fix it, I used the not operator 
  } 


  const getLatestOpenedFlashcards = async () => {
    if (!userData && !userData.email) return;
    const {email} = userData;

    try {
      const {data} = await axios.post(backendUrl + "/api/user/get-flashcards-by-email", {email})
      if (!data) throw new Error("Data not returned");
      if (!data.success) throw new Error(data.message);
      
      // Sort function
      function descendingSorted (a,b) {
        if (a.lastDateOpened < b.lastDateOpened) {
          return 1
        }
        if (a.lastDateOpened > b.lastDateOpened) {
          return -1;
        }
        return 0;
      }

      const latestData = data.data.sort(descendingSorted);
      const end = 5; //  Set to 5 to return the 6 most recent opened flashcards 
      setLatestFlashcards(latestData.slice(0,end));
      
      
    } catch (error) {
      console.log(error);
    }

  }

  const handleNavigation = (data) => {
    navigate(`../flashcards/id?q=${data._id}`)
  }

  useEffect(() => {
    graph.$context && clearTimeout(timeOut)
  },[graph])

  useEffect(() => {
    getLatestOpenedFlashcards()
    addGraphDataDaily();
    addGraphDataMonthly();
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
                  <div onClick={() => handleNavigation(value)} key={index} className="flex flex-row items-center hover:bg-slate-200 dark:hover:bg-slate-500 cursor-pointer active:bg-slate-300 dark:active:bg-slate-400">
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

            <div className="flex flex-col pb-2 text-2xl items-center justify-center">
              <h1 className="dark:text-slate-900">{`${isDay ? `Daily` : `Monthly`} Activity `}</h1>
              <p className="text-sm dark:text-slate-700 ">Hourly</p>
            </div>

            <div className="flex flex-col items-center justify-between max-h-full">
              <div className="flex box-border relative w-full h-[40vh] lg:h-[30vh]">{/**h-[50vh] lg:h-[40vh] */}
                <canvas id='myDiv' className="flex p-0 m-0 max-w-full "></canvas>
              </div>

              <div className="flex items-center justify-center ">
                <button onClick={changeGraphData} className="max-h-full px-4 py-2 text-lg font-medium rounded-md bg-slate-200 dark:bg-slate-600 ">{`Swap to ${isDay ? `Monthly` : `Daily`}`}</button>
              </div>
            </div>
            
              
          </div>  

      </div>
  )
}

export default Main