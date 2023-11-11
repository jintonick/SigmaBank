import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import home from '../../../images/home.svg';
import home2 from '../../../images/home2.svg';
import book from '../../../images/book-open.svg';
import book2 from  '../../../images/book-open2.svg'
import dots from '../../../images/message-dots.svg';
import dots2 from '../../../images/message-dots2.svg'

import './style.css'

function Footer() {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('home'); // 'home' устанавливается по умолчанию

    const navigateToHelp = () => {
        setActiveButton('help');
        navigate('/main/help');
    };

    const navigateToWiki = () => {
        setActiveButton('wiki');
        navigate('/main/wiki');
    };

    return(
        <div className='w-full sm:hidden block flex justify-center items-center h-[84px] bg-prymeblue rounded-t-[20px]'>
            <div className='w-[260px] flex justify-between items-center h-full'>
                <button className="flex justify-center items-center h-[50px] w-[50px]" onClick={navigateToWiki}>
                    <img src={activeButton === 'wiki' ? book2 : book} alt="Wiki"/>
                </button>
                <NavLink to={'/main'} onClick={() => setActiveButton('home')}>
                    <div className="flex justify-center items-center h-[50px] w-[50px]">
                        <img src={activeButton === 'home' ? home2 : home} alt="Home"/>
                    </div>
                </NavLink>
                <button className="flex justify-center items-center h-[50px] w-[50px]" onClick={navigateToHelp}>
                    <img src={activeButton === 'help' ? dots2 : dots} alt="Help"/>
                </button>
            </div>
        </div>
    )
}

export default Footer;