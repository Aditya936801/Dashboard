import "./bargraph.css";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Graph from "./Graph";

const BarGraph = () => {
  return (
    <div className="bar-graph-wrapper">
      <div>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box fontSize="25px" fontWeight="900">
            Overview
          </Box>
          <Box display="flex" gap="3px">
            <Box fontSize="13px" fontWeight="500" color="GrayText">
              {" "}
              Quaterly{" "}
            </Box>
            <KeyboardArrowDownIcon
              fontSize="small"
              sx={{ color: "GrayText" }}
            />
          </Box>
        </Box>
        <Box fontSize="15px" fontWeight="400" color="GrayText">
          {" "}
          Monthly Earning{" "}
        </Box>
      </div>
      <Graph />
    </div>
  );
};

export default BarGraph;
