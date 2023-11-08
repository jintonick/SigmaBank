import React from "react";
import logo from '../../../images/logo.png'
import {NavLink} from "react-router-dom";
import login from '../../../images/login.svg'

function Header() {
    return (
        <div className="flex h-[77px] items-center shadow-[2px_2px_10px_0px_rgba(0,0,0,0.15)]">
            <div className="ml-[25px] sm:ml-[70px] w-full">
                <img className="h-[20px] sm:h-[25px] sm:w-[194px] w-[150px]" src={logo}/>
            </div>
            <div className="flex w-full justify-around text-[18px] font-bold hidden sm:flex">
                <button className="text-prymeblue">Справочник</button>
                <button className="text-prymeblue">Поддержка</button>
                <NavLink to="/" className="text-[#F7304D]">Выйти</NavLink>
            </div>
            <div>
                <img src={login}/>
            </div>
        </div>
    )
}

export default Header;