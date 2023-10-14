import { TextField,InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import "../topbar.css"
const SearchBar = () => {
  return (
    <TextField
    id="input-with-icon-textfield"
    className="search-bar"
    placeholder="Search"
    InputProps={{

      startAdornment: (
        <InputAdornment position="start" >
          <SearchIcon className="search-bar-icon" />
        </InputAdornment>
      ),
    
      
    }}
    variant="outlined"
  />
  )
}

export default SearchBar