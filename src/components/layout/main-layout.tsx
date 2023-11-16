import React,{ useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import Header from "./header/header";
import Employee from "./lk-employee/employee";
import Meneger from "./lk-meneger/meneger";
import Footer from "./footer/footer";

import { useUser } from "../../context/UserContext";

function MainLayout() {
    const location = useLocation();
    const pathname = useLocation().pathname;
    const { setUserType, userType } = useUser();

    useEffect(() => {
        const savedUserType = localStorage.getItem('userType');
        if (savedUserType) {
            setUserType(savedUserType);
        }
    }, []);
    const renderContent = () => {
        const savedUserType = localStorage.getItem('userType');
        if (!pathname.includes('/main/help') && !pathname.includes('/main/wiki')) {
            return savedUserType === 'manager' ? <Meneger /> : <Employee />;
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
