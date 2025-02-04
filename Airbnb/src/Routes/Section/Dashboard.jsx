
import { lazy } from "react";
import { Outlet } from "react-router-dom";
import HeadersFormDashboard from "../../components/HeaderFormDashboard";

const Dashboard = lazy(() => import("../../modules/dashboard/page/index"));
const HomeDashboard = lazy(() => import("../../modules/HomeDashboard/page/index"));
const ReserveDashboard = lazy(() => import("../../modules/ReserveDashboard/page/index"));
const EventosList = lazy(() => import("../../modules/EventosDashboard/page/index"));


export const dashboardrouter = [
    {
        path: '',
        element: (
            <Dashboard>
                <Outlet />
            </Dashboard>
        ),

        children: [
            {
                path: 'dashboard',
                element: <HomeDashboard/>
            },
            {
                path: 'dashboard/reserva',
                element: <ReserveDashboard/>
            },
            {
                path: 'dashboard/eventos',
                element: <EventosList/>
            }
      
        ]
    }
]