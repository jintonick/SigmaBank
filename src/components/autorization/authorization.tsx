import React, { useState, createContext  } from "react";
import { useNavigate, NavLink } from 'react-router-dom';

import './style.css'

import { useUser } from "../../context/UserContext";

function Authorization() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonPressed, setButtonPressed] = useState(false);
    const navigate = useNavigate();

    const { setUserType } = useUser();

    const handleEmployeeClick = () => {
        setUserType('employee');
        navigate('/main');
    };

    const handleManagerClick = () => {
        setUserType('manager');
        navigate('/main');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('https://d702-2a00-1370-8188-58e4-4877-5cc-f238-4d7.ngrok-free.app/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        if (content["message"] == "success") {
            if (email == "admin@test.com"){
                setUserType('manager');
            }
            else {
                setUserType('employee');
            }
            navigate('/main');
        }
    }

    return(
        <div className="flex w-full h-screen justify-center items-center font-roboto">
            <form className="authorization-container" onSubmit={handleSubmit}>
                <div className='w-[336px] sm:w-full'>
                    <div className="h-[55px]">
                        <h1 className="pt-[20px] ml-[20px] sm:ml-[0px] font-bold text-[22px] sm:text-[30px]">Авторизация</h1>
                    </div>
                    <div className="flex justify-center items-center sm:mt-[20px]">
                        <div className="flex flex-col justify-center items-center w-[336px] sm:w-full sm:h-[244px] h-[165px] border-[1px] border-[#F4F5F6] rounded-[10px] shadow-[0px_10px_110px_1px_rgba(59,59,59,0.08)]">
                            <div className="mt-[px]">
                                <h1 className="mt-[13px] text-[14px] font-medium">Логин</h1>
                                <input
                                    className="max-w-[446px] mt-[10px] sm:p-[15px] w-[276px] sm:w-[446px] sm:h-[59px] h-[21px] sm:border-[1px] border-graydef sm:rounded-[10px] "
                                    type={"email"}
                                    placeholder={"Ваш логин"}
                                    required onChange={e => setEmail(e.target.value)}
                                />
                                <div className="bg-[#000000] w-[276px] h-[1px] sm:hidden"></div>
                            </div>
                            <div className="mt-[20px] mb-[10px]">
                                <h1 className="text-[14px] font-medium">Пароль</h1>
                                <input
                                    className="mt-[12px] max-w-[446px]  sm:p-[15px] w-[276px] sm:w-[446px] sm:h-[59px] h-[21px] sm:border-[1px] border-graydef sm:rounded-[10px]"
                                    type={"password"}
                                    placeholder={"********"}
                                    required onChange={e => setPassword(e.target.value)}
                                />
                                <div className="bg-[#000000] w-[276px] h-[1px] sm:hidden"></div>
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
                </div>
            </form>
        </div>
    )
}

export default Authorization;