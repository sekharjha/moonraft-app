import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import store from "./Store/store"
import {Provider} from "react-redux"
//..importing Theme file
import ThemeProvider from "./Theme";

ReactDOM.render(
  <Provider store = {store}>
    <ThemeProvider>
     <App />   
   </ThemeProvider>
   </Provider>,

document.getElementById("root"));
