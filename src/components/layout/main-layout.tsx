import React from "react";
import Header from "./header/header";
import Employee from "./lk-employee/employee";
import Footer from "./footer/footer";

function MainLayout() {
    return (
        <div className="font-roboto flex flex-col h-screen">
            <Header />
            <div className="flex-1 overflow-y-auto">
                <Employee />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;
