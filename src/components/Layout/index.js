import { Box, Toolbar } from '@mui/material'
import TopBar from "../TopBar"
import SideBar from "../SideBar"
import "./layout.css"
import { colors } from '../../theme'
import { useState } from 'react'

const Layout = ({children}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 220
  const name = "Aditya"
  const designation = "Project Manager"

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box display="flex" >
    <TopBar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} name={name} />
    <SideBar drawerWidth={drawerWidth} name={name} designation={designation} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    <Box
        component="main"
        className='children-wrapper'
        bgcolor= {colors.primary[500]}
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <Toolbar/>
      
      {children}
      </Box>
    
    </Box>
  )
}

export default Layout