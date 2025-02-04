
import { lazy } from "react";
import { Outlet } from "react-router-dom";
const Login = lazy(() => import("../../modules/Login/page/index"));
const Register = lazy(() => import("../../modules/RegistrarUsuario/page/index"));
const Conocenos = lazy(() => import("../../modules/About/page/index"));
const Reservar = lazy(() => import("../../modules/Reserve/page/index"));


export const mainRoutes = [
    {
        element:<Outlet />,
        children: [
            {
                path: "/conocenos",
                element: <Conocenos/>
            },
            {
                path: "/reserva",
                element: <Reservar/>
            },

            {
                path: "/login",
                element: <Login/>
            },            
            
            {
                path: "/crearcuenta",
                element:<Register/>
            },           
            
           
        ]
    }
]