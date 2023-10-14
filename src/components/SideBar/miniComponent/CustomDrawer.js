import {
  Box,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { DrawerData } from "../utility";
import TokenIcon from "@mui/icons-material/Token";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import "../sidebar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colors } from "../../../theme";

const CustomDrawer = ({ name,designation }) => {
  const [active, setActive] = useState("Dashboard");


  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      padding="20px"
    >
      <div>
        <Box
          display="flex"
          gap="10px"
          alignItems="center"
  
          width="100%"
          mb="25px"
        
        >
          <TokenIcon fontSize="large" />
          <Typography variant="h3">Dashboard</Typography>
        </Box>

        <List>
          {DrawerData.map((item, index) => {
            const onClick = () => {
              setActive(item.name);
            };
            return (
              <ListItem
                key={index}
                disablePadding
                className={ active === item.name ?"side-bar sidebar-selected":"side-bar"}
                onClick={onClick}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="h6">{item.name}</Typography>}
                  />
                  {item.name !== "Dashboard" && (
                    <ChevronRightIcon fontSize="small" />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
      <Box display="flex" justifyContent="space-around" alignItems="center" bgcolor="antiquewhite" borderRadius="6px" margin="0 -10px" padding="8px">
        <Box display="flex" gap="10px">
          <Avatar sx={{bgcolor:colors.primary[500]}}>{name[0]}</Avatar>
          <Box display="flex" flexDirection="column">
            <Typography variant="h5">{name}</Typography>
            <Box textTransform="uppercase" fontWeight="200" color={colors.primary[500]}>
              {designation}
            </Box>
          </Box>
        </Box>
        <KeyboardArrowDownIcon fontSize="small" />
      </Box>
    </Box>
  );
};

export default CustomDrawer;
