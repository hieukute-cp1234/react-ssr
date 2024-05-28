import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Calculate from "../pages/Calculate";
import Histories from "../pages/Histories";

export const ROUTES = [
  {
    path: "/",
    name: "home",
    component: <Home />,
  },
  {
    path: "/detail",
    name: "detail",
    component: <Detail />,
  },
  {
    path: "/calculate",
    name: "calculate",
    component: <Calculate />,
  },
  {
    path: "/histories",
    name: "histories",
    component: <Histories />,
  },
];
