import React from "react";
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import Header from "./header/header";
import Employee from "./lk-employee/employee";
import Meneger from "./lk-meneger/meneger";
import Footer from "./footer/footer";

import { useUser } from "../../context/UserContext";

function MainLayout() {
    const location = useLocation();
    const { userType } = useUser();
    const pathname = useLocation().pathname;


    const renderContent = () => {
        if (!pathname.includes('/main/help') && !pathname.includes('/main/wiki')) {
            return userType === 'manager' ? <Meneger /> : <Employee />;
        }
    };

    return (
        <div className="font-roboto flex flex-col h-screen">
            <Header />
            <div className="flex-1 overflow-y-auto">
                {renderContent()}
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;
