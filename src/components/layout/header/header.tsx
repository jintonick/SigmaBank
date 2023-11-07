import React from "react";
import logo from '../../../images/logo.png'

function Header() {
    return (
        <div className="flex h-[77px] items-center shadow-[2px_2px_10px_0px_rgba(0,0,0,0.15)]">
            <div className="ml-[70px] w-full">
                <img className="h-[25px] w-[194px]" src={logo}/>
            </div>
            <div className="flex w-full justify-around text-[18px] font-bold">
                <button className="text-prymeblue">Справочник</button>
                <button className="text-prymeblue">Поддержка</button>
                <button className="text-[#F7304D]">Выйти</button>
            </div>
        </div>
    )
}

export default Header