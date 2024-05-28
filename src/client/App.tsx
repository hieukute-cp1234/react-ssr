import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routers/routes";
import { ContextAPI } from "./contexts";

const App = () => {
  const [histories, setHistories] = useState([]);

  return (
    <ContextAPI.Provider value={{ histories, setHistories }}>
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.name} path={route.path} element={route.component} />
        ))}
      </Routes>
    </ContextAPI.Provider>
  );
};

export default App;
