import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TokentContext } from "./Context/Context";
// import dotenv from 'dotenv'
// dotenv.config({path:'./.env'})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TokentContext>
      <App />
    </TokentContext>
  </BrowserRouter>
);
