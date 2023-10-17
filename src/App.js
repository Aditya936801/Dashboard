import "./App.css";
import { CssBaseline, ThemeProvider, Toolbar, Box } from "@mui/material";
import { themes } from "./theme";
import Dashboard from "./scenes/Dashboard";

const App = () => {
  return (
    <div className="app">
      <ThemeProvider theme={themes}>
        <CssBaseline />

        <Dashboard/>
      </ThemeProvider>
    </div>
  );
};

export default App;
