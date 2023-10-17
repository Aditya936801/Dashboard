import { headers } from "./constants";
import "./customtable.css";
import { Box, Divider } from "@mui/material";

const CustomTable = () => {
  return (
    <div className="custom-table-wrapper">
      <Box display="flex" gap="2px" >
        {headers.map((item, index) => {
          return (
            <div key={index} className={"custom-table-header " + item.class}>
              {item.name}
            </div>
          );
        })}
      </Box>
      <Divider className="custom-table-divider" />
    </div>
  );
};

export default CustomTable;
