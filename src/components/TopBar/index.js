import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Box } from "@mui/material";
import SearchBar from "../SearchBar";
import "./topbar.css"
import { NAME } from "../../GlobalConstants/UserDetail";

const TopBar = ({ handleDrawerToggle }) => {

  return (
    <AppBar
      position="fixed"
      
      className="top-bar-wrapper"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          sx={{ alignItems: { xs:"center",sm:"flex-end"  } }}
          
        >
          <Box display="flex" gap="5px" alignItems="center">
            <Typography variant="h4">Hello {NAME}</Typography>
            <WavingHandIcon fontSize="small" color="secondary" />
          </Box>
          <SearchBar Appbar={true} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
