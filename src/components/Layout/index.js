import { Box, Toolbar } from '@mui/material'
import TopBar from "../TopBar"
import SideBar from "../SideBar"
import "./layout.css"
import { colors } from '../../theme'
import { useState } from 'react'

const Layout = ({children}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box display="flex" >
    <TopBar handleDrawerToggle={handleDrawerToggle}   />
    <SideBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    <Box
        component="main"
        className='children-wrapper'
        bgcolor= {colors.primary[500]}
      
      >
      <Toolbar/>
      
      {children}
      </Box>
    
    </Box>
  )
}

export default Layout