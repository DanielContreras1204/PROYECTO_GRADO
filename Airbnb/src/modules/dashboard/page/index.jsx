import { Outlet } from "react-router-dom";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";

export default function Index({children}) {

    return (
        <div className="flex w-full h-screen bg-slate-50">
            <Sidebar />
            <div className="flex-1 bg-slate-50 flex-col">
                <HeaderDashboard />
                <div className="flex-1 ml-64">                 
                    {children}
                </div>
            </div>
        </div>

    )
};
