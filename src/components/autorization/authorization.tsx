import React, { useState } from "react";
import './style.css'
import { useNavigate } from 'react-router-dom';

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
                    <h1 className="font-bold text-[30px]">Авторизация</h1>
                </div>
                <div className="flex flex-col justify-center items-center h-[244px] border-[1px] border-[#F4F5F6] rounded-[10px] shadow-[0px_10px_110px_1px_rgba(59,59,59,0.08)]">
                    <div className="mt-[20px]">
                        <h1 className="text-[16px] font-medium">Логин</h1>
                        <input
                            className="mt-[12px] max-w-[446px] w-[446px] h-[59px] border-[1px] border-graydef rounded-[10px] p-[20px]"
                            type={"email"}
                            placeholder={"Ваш логин"}
                        />
                    </div>
                    <div className="mt-[14px] mb-[20px]">
                        <h1 className="text-[16px] font-medium">Пароль</h1>
                        <input
                            className="mt-[12px] max-w-[446px] w-[446px] h-[59px] border-[1px] border-graydef rounded-[10px] p-[20px]"
                            type={"password"}
                            placeholder={"********"}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between h-[45px]">
                    <div className="flex flex-row items-center text-graydef">
                        <input className="w-[16px] h-[16px] mr-[13px] " type={"checkbox"}/>
                        <p>Запомнить меня</p>
                    </div>
                    <div className="flex items-center">
                        <h2 className="text-prymeblue ">Забыли пароль?</h2>
                    </div>
                </div>
                <div className="h-[90px]">
                    <button
                        className={`h-[60px] w-full ${isButtonPressed ? 'bg-[#182757]' : 'bg-prymeblue'} text-[#FFF] text-[20xp] font-bold rounded-[10px]`}
                        onMouseDown={() => setButtonPressed(true)}
                        onMouseUp={() => setButtonPressed(false)}
                        onMouseLeave={() => setButtonPressed(false)}
                        type="submit"
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Authorization;