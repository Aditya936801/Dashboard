import { HEADERS } from "./helper";
import "./customtable.css";
import { Box} from "@mui/material";
import TableBody from "../CustomTable/TableBody";
import { PRODUCT_DATA } from "./helper";

const CustomTable = () => {
  return (
    <div className="custom-table-wrapper">
        <Box display="flex" gap="2px">
          {HEADERS.map((item, index) => {
            return (
              <div key={index} className={"custom-table-header " + item.class}>
                {item.name}
              </div>
            );
          })}
        </Box>
        {
          PRODUCT_DATA?.map((item,index)=>{
            return(

              <TableBody key={index} data={item} />
              )
          })
        }
    </div>
  );
};

export default CustomTable;
