// For drawing the chart
// <canvas id="myDiv" style="width:100%;max-width:700px"></canvas>
import axios from "axios"
import { useContext, useState } from "react"
import { AppContent } from "../../../context/AppContext"

import React from 'react'

const GraphProgress = ({props}) => {

    const days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayData = [5,10,3,10,4,5,8]
    const monthData = [1,2,3,4,5,6,7,8,9,10,11,12]
    const [result, setResult] = useState([])
    
    const barColors = "#183a70"
    const windowWidth = window.innerWidth;
    
    const axis = windowWidth < 1000 ? "y" : "x"

    const dataValues = async() => {
        const {email}  = userData;
        try {

            if (isDay) {
                const {data} = axios.post(backendUrl + "/api/user/get-data-by-week",{email})
                console.log(data);
            }

            const res = {
                type: "bar",
                
                data : {
                    labels : isDay ? days : months,
                    datasets : [{
                        backgroundColor : barColors,
                        label : null,
                        data: isDay? dayData : monthData
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

            setResult(res);
            
        } catch (error) {
            console.log(error)
        }
    }
    
    console.log(data);

    return data;
}

export default GraphProgress




