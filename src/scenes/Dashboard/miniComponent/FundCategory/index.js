import { Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./fundCategory.css";


const FundCategory = ({ item }) => {
  return (
    <div className="fundCategory-wrapper">
    <img src={item.image} alt="loading..." className="fundcategory-image" />
      <Box display="flex" flexDirection="column">
        <Box fontSize="12px" color="grey">
          {item.title}
        </Box>
        <Box fontSize="30px" fontWeight="600">
          ${item.amount}K
        </Box>
        <Box
          display="flex"
          fontSize="13px"
          fontWeight="500"
          alignItems="center"
          
        >
          {item.profit ? (
            <ArrowUpwardIcon color="success" sx={{ fontSize: "14px" }} />
          ) : (
            <ArrowDownwardIcon color="error" sx={{ fontSize: "14px" }} />
          )}

          <Box mr="4px" fontWeight="900" color={item.profit ? "green" : "red"}>
          {item.change} %
          </Box>
          <div>this month</div>
          </Box>
          </Box>
          </div>
          );
        };

export default FundCategory;
