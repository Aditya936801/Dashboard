import { Box } from "@mui/material"
import "./doughnut.css"
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

const Graph = () => {
  const thickness = {
    beforeDraw: function (chart) {
      const thickness = [[350,260],[340,270]]
      thickness.forEach((item,index)=>{
        chart.getDatasetMeta(0).data[index].innerRadius = (chart.chartArea.width/item[0])*100
        console.log(chart.chartArea.width)
      chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width/item[1])*100;
  
      })
    },
    beforeDatasetsDraw: function(chart){
      const {ctx} = chart
      ctx.save()
      const x =  chart.getDatasetMeta(0).data[2].x
      const y =  chart.getDatasetMeta(0).data[2].y 
      ctx.font = "bold 30px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText("65%",x,y)
      ctx.font = "10px sans-serif"
      ctx.fillText("TOTAL NEW",x,y+15)
      ctx.fillText("CUSTOMERS",x,y+30)

    }
  };
  const plugins = [thickness]
    const options = {
        responsive:true,
        
      
    }
    const data = {
        datasets: [
          {
            data: [8, 16, 18],
            backgroundColor: ["#f1429c","#7b4feb","#f2efff"],
            borderWidth: 0,
            cutout:"90%",
            radius:"70%"
          
          },
        ],
      };
  return (
    <Box display="flex" justifyContent="center" alignItems="center" maxHeight="300px" mt="10px" >

    <Doughnut plugins={plugins}  options={options}   data={data}   />
    
    </Box>
  )
}

export default Graph