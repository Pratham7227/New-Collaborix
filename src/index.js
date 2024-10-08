import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <Provider store={store}>
       <BrowserRouter>
       <Toaster/>
       <App /> 
      </BrowserRouter>
      </Provider> 

);
