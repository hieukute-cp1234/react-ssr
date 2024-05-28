import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./assets/scss/index.scss";

const RouterApp = () => {
  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
};

hydrateRoot(document.getElementById("root"), <RouterApp />);
