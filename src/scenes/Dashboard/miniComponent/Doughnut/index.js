import "./doughnut.css"
import { Box } from "@mui/material"
import Graph from "./Graph"
const Doughnut = () => {
  return (
    <div className="doughnut-wrapper">
    <Box fontSize="25px" fontWeight="900" >Customers</Box>
    <Box fontSize="15px" fontWeight="400" color="GrayText" > Customers that buy products </Box>
    <Graph/>

    
    </div>
  )
}

export default Doughnut