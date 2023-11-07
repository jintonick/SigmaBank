import React from "react";
import Header from "./header/header";
import Employee from "./lk-employee/employee";

function MainLayout() {
    return (
        <div className="font-roboto">
            <Header />
            <Employee />
        </div>
    )
}

export default MainLayout;