import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
    <Provider store={store}> 
      <App></App>
    </Provider>

       
    </BrowserRouter>



  
);
