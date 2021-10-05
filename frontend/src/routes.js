import Home from "./pages/index";
import Staking from "./pages/stakingPage";

var routes = [
  {
    path: "/",
    name: "Home",
    icon: "",
    component: Home,
    layout: "/site"
  },
  {
    path: "/stake",
    name: "Stake",
    icon: "",
    component: Staking,
    layout: "/site"
  },

];
export default routes;
