import "./App.css";
import { CssBaseline, ThemeProvider, Toolbar, Box } from "@mui/material";
import { themes } from "./theme";
import Sample from "./components/Sample";

const App = () => {
  return (
    <div className="app">
      <ThemeProvider theme={themes}>
        <CssBaseline />

        <Sample/>
      </ThemeProvider>
    </div>
  );
};

export default App;
