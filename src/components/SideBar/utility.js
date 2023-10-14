import TokenIcon from "@mui/icons-material/Token";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PaidIcon from '@mui/icons-material/Paid';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PortraitIcon from '@mui/icons-material/Portrait';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

export const DrawerData = [
  {
    name: "Dashboard",
    icon: <TokenIcon fontSize="medium" color="primary"  />
  },
  {
    name: "Products",
    icon: <DesktopWindowsIcon fontSize="medium" color="primary" />
  },
  {
    name: "Customers",
    icon: <PortraitIcon fontSize="medium" color="primary" />
  },
  {
    name: "Income",
    icon: <PaidIcon fontSize="medium" color="primary" />
  },
  {
    name: "Promote",
    icon: <LocalOfferIcon fontSize="medium" color="primary" />
  },
  {
    name: "Help",
    icon: <HelpCenterIcon fontSize="medium" color="primary" />
  },
];
