import React, { use } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {

  const [theme, colorMode] = useMode;
  
  return (
    // ColorModeContext.Provider cung cap theme MUI cho toan bo ung dung
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="App">
        <main className="content"></main>
      </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
