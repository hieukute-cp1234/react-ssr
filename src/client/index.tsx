import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configStore from "./store";
import App from "./components/App";
import "./assets/scss/index.scss";

const store = configStore();

const RouterApp = () => {
  return (
    <>
      <Provider
        store={store}
        children={
          <BrowserRouter>
            <App />
          </BrowserRouter>
        }
      ></Provider>
    </>
  );
};

hydrateRoot(document.getElementById("root"), <RouterApp />);
