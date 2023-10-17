import { TextField,InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import "./searchbar.css"
const SearchBar = ({Appbar=false}) => {
  const Class_Name = Appbar?"top-search-bar":"table-search-bar"
  return (
    <TextField
    id="input-with-icon-textfield"
    className={Class_Name}
    placeholder="Search"
    InputProps={{

      startAdornment: (
        <InputAdornment position="start" >
          <SearchIcon className={Class_Name+" icon"}  />
        </InputAdornment>
      ),
    
      
    }}
    variant="outlined"
  />
  )
}

export default SearchBar