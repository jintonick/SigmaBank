import React, { useState } from "react";
import './unelement.css'; // Импортируйте CSS файл с анимацией

interface DeliveryDataProps {
    title: string;
    content: string;
}
function UnElement () {
    const [isOpen, setIsOpen] = useState(false); // Состояние открытия/закрытия карточки

    const DeliveryData: React.FC<DeliveryDataProps> = ({ title, content }) => {
        return (
            <div className="mt-[20px] font-bold">
                <h2 className="text-[14px] text-graycol">{title}</h2>
                <h1 className="text-[18px]">{content}</h1>
            </div>
        )
    }

    return (
        <div className={`transition-all duration-500 ${isOpen ? 'h-[470px]' : 'h-[90px]'} flex flex-col mb-[20px] justify-between max-w-[594px] border-prymeblue border-[2px] rounded-[10px] w-full overflow-hidden`}>
            {isOpen ? (
                <div className="">
                    <div>
                        <div className="px-[25px] pt-[18px]">
                            <h1 className="text-[30px] font-bold">Заказ №1</h1>
                            <DeliveryData title="Описание" content="Доставка карты Халва и заключение договора" />
                            <DeliveryData title="Получатель" content="Иванов Иван Иванов" />
                            <DeliveryData title="Адрес" content="г.Краснодар ул.Победы д.7" />
                            <DeliveryData title="Комментарий" content="Код от домофона такой же как от квартиры" />
                            <div className="mt-[40px] ml- w-full flex justify-between">
                                <button className="w-[207px] h-[56px] bg-prymeblue text-[#FFF] text-[20px] font-medium rounded-[10px]">Начать</button>
                                <button onClick={() => setIsOpen(false)} className="text-[18px] font-bold text-prymeblue">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between items-center h-screen w-full">
                    <div className="ml-[25px]">
                        <h1 className="text-[20px] font-bold">Заказ №1</h1>
                        <h2 className="text-[18px]">Доставка карт и материалов</h2>
                    </div>
                    <button onClick={() => setIsOpen(true)} className=" mr-[42px] text-[18px] font-bold text-prymeblue">Открыть</button>
                </div>
            )}
        </div>
    )
}

export default UnElement;