import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

//..importing Theme file
import ThemeProvider from "./Theme";

ReactDOM.render(<ThemeProvider>
     <App />   
   </ThemeProvider>,

document.getElementById("root"));
