import React, { useState } from "react";
import './style.css'
import { useNavigate, NavLink } from 'react-router-dom';

function Authorization() {
    const [isButtonPressed, setButtonPressed] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/main');
    }

    return(
        <div className="flex w-full h-screen justify-center items-center font-roboto">
            <form className="authorization-container" onSubmit={handleSubmit}>
                <div className="h-[55px]">
                    <h1 className="pt-[20px] ml-[69px] font-bold text-[22px]">Авторизация</h1>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-[336px] sm:w-full sm:h-[244px] h-[165px] border-[1px] border-[#F4F5F6] rounded-[10px] shadow-[0px_10px_110px_1px_rgba(59,59,59,0.08)]">
                        <div className="mt-[px]">
                            <h1 className="mt-[13px] text-[14px] font-medium">Логин</h1>
                            <input
                                className="max-w-[446px] mt-[10px] w-[276px] sm:w-[446px] sm:h-[59px] h-[21px] sm:border-[1px] border-graydef sm:rounded-[10px] "
                                type={"email"}
                                placeholder={"Ваш логин"}
                            />
                            <div className="bg-[#000000] w-[276px] h-[1px] sm:hidden"></div>
                        </div>
                        <div className="mt-[20px] mb-[10px]">
                            <h1 className="text-[14px] font-medium">Пароль</h1>
                            <input
                                className="mt-[12px] max-w-[446px] w-[276px] sm:w-[446px] sm:h-[59px] h-[21px] sm:border-[1px] border-graydef sm:rounded-[10px]"
                                type={"password"}
                                placeholder={"********"}
                            />
                            <div className="bg-[#000000] w-[276px] h-[1px] sm:hidden"></div>
                        </div>
                        <div>
                            <NavLink to="/main">сотрудник</NavLink>
                            <NavLink to="/meneger">менеджер</NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-row justify-between w-[277px] sm:w-full h-[45px] text-[12px]">
                        <div className="flex flex-row items-center text-graydef">
                            <input className="w-[16px] h-[16px] mr-[13px] " type={"checkbox"}/>
                            <p >Запомнить меня</p>
                        </div>
                        <div className="flex items-center">
                            <h2 className="text-prymeblue ">Забыли пароль?</h2>
                        </div>
                    </div>
                </div>
                <div className="h-[90px] flex justify-center items-start">
                    <button
                        className={`sm:h-[60px] h-[50px] w-[277px] sm:w-full ${isButtonPressed ? 'bg-[#182757]' : 'bg-prymeblue'} text-[#FFF] text-[20xp] font-bold rounded-[10px]`}
                        onMouseDown={() => setButtonPressed(true)}
                        onMouseUp={() => setButtonPressed(false)}
                        onMouseLeave={() => setButtonPressed(false)}
                        type="submit"
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Authorization;