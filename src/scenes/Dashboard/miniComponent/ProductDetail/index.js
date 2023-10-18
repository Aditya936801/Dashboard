import "./productdetail.css";
import { Box, FormControl, Select, MenuItem} from "@mui/material";
import SearchBar from "../../../../components/SearchBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomTable from "./miniComponent/CustomTable";

const ProductDetail = () => {
  return (
    <div className="product-detail-wrapper">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div className="product-heading" >
          Product Sell
        </div>
        <Box display="flex" gap="10px">
          <SearchBar />
          <FormControl size="small">
            <Select
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              defaultValue={30}
              IconComponent={KeyboardArrowDownIcon}
              className="product-detail-select"
            >
              <MenuItem value={20}>Last 20 Days</MenuItem>
              <MenuItem value={30}>Last 30 Days</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <CustomTable/>
    </div>
  );
};

export default ProductDetail;
