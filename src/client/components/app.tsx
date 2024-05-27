import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../routers/routes";

const App = () => {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.name} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default App;
