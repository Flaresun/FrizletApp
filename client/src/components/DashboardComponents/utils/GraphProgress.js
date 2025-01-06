// For drawing the chart
// <canvas id="myDiv" style="width:100%;max-width:700px"></canvas>

const days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const time = [5,10,3,10,4,5,8]

const barColors = "blue"
const windowWidth = window.innerWidth;

const axis = windowWidth < 1000 ? "y" : "x"
const data = {
    type: "bar",
    
    data : {
        labels : days,
        datasets : [{
            backgroundColor : barColors,
            label : null,
            data: time
        }]
    },
    options : {
        indexAxis: axis,
        maintainAspectRatio: false,

        skipNull : true,
        plugins : {
            legend : {
                display: false
            }
        }
    }
};

export default data;


