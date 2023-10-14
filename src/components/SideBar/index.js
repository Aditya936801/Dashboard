import { Typography,Box,Drawer } from "@mui/material";
import CustomDrawer from "./miniComponent/CustomDrawer";

const SideBar = ({drawerWidth,name,designation,mobileOpen,handleDrawerToggle}) => {
  return (
    <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}   
     
  >
  <Drawer
  variant="temporary"
  open={mobileOpen}
  onClose={handleDrawerToggle}
  ModalProps={{
    keepMounted: true, // Better open performance on mobile.
  }}
  sx={{
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
  }}
>
<CustomDrawer name={name}  designation={designation} />
  
</Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
      <CustomDrawer name={name}  designation={designation} />
    </Drawer>
  </Box>
  )
}

export default SideBar



//<Drawer
    //   container={container}
    //   variant="temporary"
    //   open={mobileOpen}
    //   onClose={handleDrawerToggle}
    //   ModalProps={{
    //     keepMounted: true, // Better open performance on mobile.
    //   }}
    //   sx={{
    //     display: { xs: 'block', sm: 'none' },
    //     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    //   }}
    // >
    //   {drawer}
    // </Drawer>