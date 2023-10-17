import Layout from "../../components/Layout";
import FundCategory from "./miniComponent/FundCategory";
import "./dashboard.css";
import {  Grid } from "@mui/material";
import { FUND_DATA } from "./Constants";
import { createTheme, ThemeProvider } from "@mui/material";
import BarGraph from "./miniComponent/BarGraph";
import Doughnut from "./miniComponent/Doughnut";
import ProductDetail from "./miniComponent/ProductDetail";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 1000,
      lg: 1300,
      xl: 1536,
    },
  },
});
const Dashboard = () => {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <div className="dashboard-wrapper">
          <Grid container spacing={3} className="dashboard-grid-container">
            {FUND_DATA.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FundCategory key={index} item={item} />
                </Grid>
              );
            })}
          </Grid>
      
          <div className="dash-board-graphs">
          <BarGraph />
          <Doughnut />
          </div>
            <ProductDetail/>
        
        </div>
      </ThemeProvider>
    </Layout>
  );
};

export default Dashboard;
