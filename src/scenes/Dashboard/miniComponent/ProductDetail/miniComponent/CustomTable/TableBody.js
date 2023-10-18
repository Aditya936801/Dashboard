import { Box } from "@mui/material";
import "./customtable.css";
const TableBody = ({data}) => {
  return (
    <Box display="flex" gap="2px" alignItems="center">
      <div className="table-basis-60 table-product-wrapper">
        <img src={data.image} alt="loading..." className="product-image" />
        <Box display="flex" flexDirection="column">
          <Box fontSize="20px" fontWeight="900" >{data.name}</Box>
          <Box color="GrayText" >
           {data.text}
          </Box>
        </Box>
      </div>
      <Box fontWeight="500" className="table-basis-12">
        {data.stock} in stock
      </Box>
      <Box fontWeight="700" fontSize="15px" className="table-basis-12">
        $ {data.price}
      </Box>
      <Box fontWeight="500" className="table-basis-16">
        {data.sales}
      </Box>
    </Box>
  );
};

export default TableBody;
