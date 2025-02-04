import { useRoutes } from "react-router-dom";
import { mainRoutes } from "./main";
import Index from "../../modules/HomePage/page";
import { dashboardrouter } from "./Dashboard";

export default function Router (){
    return useRoutes([
        {
            path: "/",
            element: <Index/>,
        },

        ...mainRoutes,
        ...dashboardrouter
    ]);
}