import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import NewApp from "./NewApp";
import {BrowserRouter,Routes,Route} from "react-router-dom";
ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NewApp/>}/>
        <Route exact path="/sorting" element={<App/>}/>
      </Routes>
      </BrowserRouter>


    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
