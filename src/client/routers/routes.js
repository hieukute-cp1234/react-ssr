import Home from "../components/Home";
import Detail from "../components/Detail";
import Calculate from "../components/Calculate";

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
];
