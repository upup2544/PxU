import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import './applayout.css'
const AppLayout = () => {
    return (<div className="Layout">
        <div className="sidebar"> 
            <Sidebar />
        </div>
        <div className="outlet">
            <Outlet/>
        </div>

    </div>
    );
};

export default AppLayout;
