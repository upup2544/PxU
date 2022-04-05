import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import './applayout.css'
const AppLayout = () => {
    return (<div className="Layout">
        <Sidebar/>
        <Outlet/>
    </div>
    );
};

export default AppLayout;
