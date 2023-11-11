import React from "react";
import { useNavigate } from 'react-router-dom';
import {NavLink} from "react-router-dom";

import logo from '../../../images/logo.png'
import login from '../../../images/login.svg'

function Header() {
    const navigate = useNavigate();

    const navigateToHelp = () => {
        navigate('/main/help');
    };

    const navigateToWiki = () => {
        navigate('/main/wiki');
    };

    return (
        <div className="flex h-[77px] items-center shadow-[2px_2px_10px_0px_rgba(0,0,0,0.15)]">
            <div className="ml-[25px] sm:ml-[70px] w-full">
                <NavLink to="/main" className="text-[#F7304D]"><img className="h-[20px] sm:h-[25px] sm:w-[194px] w-[150px]" src={logo}/></NavLink>
            </div>
            <div className="flex w-full justify-around text-[18px] font-bold hidden sm:flex">
                <button className="text-prymeblue" onClick={navigateToWiki}>Справочник</button>
                <button className="text-prymeblue" onClick={navigateToHelp}>Поддержка</button>
                <NavLink to="/" className="text-[#F7304D]">Выйти</NavLink>
            </div>
            <div className='mr-[32px] sm:hidden block'>
                <NavLink to="/" className="text-[#F7304D]"><img src={login}/></NavLink>
            </div>
        </div>
    )
}

export default Header;