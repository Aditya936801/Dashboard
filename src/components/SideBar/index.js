import { Box, Drawer } from "@mui/material";
import CustomDrawer from "./miniComponent/CustomDrawer";

const SideBar = ({ mobileOpen, handleDrawerToggle }) => {
  return (
    <Box component="nav" className="sidebar-wrapper">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        className="sidebar-drawer temporary-drawer"
      >
        <CustomDrawer />
      </Drawer>
      <Drawer
        variant="permanent"
        className="sidebar-drawer permanent-drawer"
        open
      >
        <CustomDrawer />
      </Drawer>
    </Box>
  );
};

export default SideBar;


