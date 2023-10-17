import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);
const Graph = () => {

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Fully Rounded",
        data: [10, 15, 34, 56, 43, 75, 40, 31, 8, 44, 23, 20],
        backgroundColor: "#f2efff",
        hoverBackgroundColor: "#5a32ea",
        borderWidth: 0,
        borderRadius: 7,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks:{
            color:"black",
            font:{
                weight:700,
            }
        }
        
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default Graph;
