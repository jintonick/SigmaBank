import React, { useState, useEffect } from "react";
import pluse from '../../images/plus.svg'
import './unelement.css'; // Импортируйте CSS файл с анимацией
import {Map, YMaps} from "@pbe/react-yandex-maps";
import MyMapComponent from "../layout/lk-employee/mymap";
// import MyMapComponent from "./mymap";

interface UnElementProps {
    onOpen: (startPoint: string, endPoint: string) => void;
    route: {
        startPoint: string;
        endPoint: string;
    };
}

interface DeliveryDataProps {
    title: string;
    content: string;
}
function UnElement({ onOpen, route }: UnElementProps) {
    const [isElementOpen, setIsElementOpen] = useState(false);

    const toggleOpen = () => {
        if (!isElementOpen) {
            console.log("Открытие UnElement", route.startPoint, route.endPoint);
            onOpen(route.startPoint, route.endPoint);
        }
        setIsElementOpen(!isElementOpen);
    };

    const DeliveryData: React.FC<DeliveryDataProps> = ({ title, content }) => {
        return (
            <div className="mt-[20px] font-bold">
                <h2 className="sm:text-[14px] text-[10px] font-bold sm:font-medium text-graycol">{title}</h2>
                <h1 className="sm:text-[18px] text-[12px]">{content}</h1>
            </div>
        )
    }

    return (
        <div>
            <div
                className={`transition-height duration-500 ${isElementOpen  ? 'h-[470px]' : 'h-[90px]'} sm:flex  hidden flex-col mb-[20px] justify-between max-w-[594px] shadow-[0px_2px_5px_rgba(0,0,0,0.15)] sm:border-prymeblue sm:border-[2px] rounded-[10px] w-full overflow-hidden`}
            >
                {isElementOpen  ? (
                    <div className="px-[25px] pt-[18px]">
                        <h1 className="text-[30px] font-bold">Заказ №1</h1>
                        <DeliveryData title="Описание" content="Доставка карты Халва и заключение договора" />
                        <DeliveryData title="Получатель" content="Иванов Иван Иванов" />
                        <DeliveryData title="Адрес" content="г.Краснодар ул.Победы д.7" />
                        <DeliveryData title="Комментарий" content="Код от домофона такой же как от квартиры" />
                        <div className="mt-[40px] ml- w-full flex justify-between">
                            <button className="w-[207px] h-[56px] bg-prymeblue text-[#FFF] text-[20px] font-medium rounded-[10px]">Начать</button>
                            <button onClick={() => setIsElementOpen(false)} className="text-[18px] font-bold text-prymeblue">Закрыть</button>
                        </div>
                    </div>
                ) : (
                    <div className="justify-between items-center h-screen flex w-full">
                        <div className="ml-[25px]">
                            <h1 className="text-[20px] font-bold">Заказ №1</h1>
                            <h2 className="text-[18px]">Доставка карт и материалов</h2>
                        </div>
                        <button onClick={toggleOpen} className=" mr-[42px] text-[18px] font-bold text-prymeblue">Открыть</button>
                    </div>
                )}
            </div>
            <div
                className={`transition-height duration-500 ${isElementOpen  ? 'h-[635px]' : 'h-[58px]'} sm:hidden block flex flex-col mb-[20px] justify-between max-w-[594px] shadow-[0px_2px_5px_rgba(0,0,0,0.15)] sm:border-prymeblue sm:border-[2px] rounded-[10px] w-full overflow-hidden`}
            >
                {isElementOpen  ? (
                    <div className="">
                        <div>
                            <div className="px-[13px] pt-[11px]">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h1 className="text-[14px] font-bold">Заказ №1</h1>
                                        <h1 className="text-[12px] font-normal">Доставка карт и материалов</h1>
                                    </div>
                                    <div>
                                        <button onClick={() => setIsElementOpen(false)} className=" flex justify-center items-center text-[12px] font-bold text-prymeblue">Закрыть<img src={pluse}/></button>
                                    </div>
                                </div>
                                <DeliveryData title="Получатель" content="Иванов Иван Иванов" />
                                <DeliveryData title="Адрес" content="г.Краснодар ул.Победы д.7" />
                                <DeliveryData title="Комментарий" content="Код от домофона такой же как от квартиры" />
                                <div className="mt-[40px] w-full flex justify-center items-center">
                                    <button className="z-10 w-[220px] h-[40px] absolute bottom-[100px] bg-prymred text-[#FFF] text-[20px] font-medium rounded-[10px]">Начать</button>
                                </div>
                                <div className="h-[424px] justify-center items-center mb-[5px]">
                                    <MyMapComponent startPoint={route.startPoint} endPoint={route.endPoint} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center h-screen w-full">
                        <div className="ml-[13px]">
                            <h1 className="sm:text-[20px] text-[14px] font-bold">Заказ №1</h1>
                            <h2 className="sm:text-[18px] text-[12px]">Доставка карт и материалов</h2>
                        </div>
                        <button onClick={toggleOpen} className=" mr-[26px] text-[12px] font-bold text-prymeblue">Открыть</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UnElement;