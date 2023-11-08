import React from "react";
import Header from "../header/header";
import UnMenElement from "../../universal-element/uneversal-meneger-component";

function Meneger() {
    return (
        <div className="font-roboto">
            <Header />
            <div className="m-[25px]">
                <UnMenElement/>
            </div>
        </div>
    )
}

export default Meneger;