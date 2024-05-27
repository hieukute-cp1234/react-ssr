import Home from "../components/Home";
import Detail from "../components/Detail";

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
];