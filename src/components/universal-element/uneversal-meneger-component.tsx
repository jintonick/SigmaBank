import React, { useState, useRef, useEffect } from "react";
import './unelement.css'; // Импортируйте CSS файл с анимацией
import profile from '../../images/profile.jpg'

interface DeliveryDataProps {
    title: string;
    content: string;
}
const DeliveryData: React.FC<DeliveryDataProps> = ({ title, content }) => (
    <div className="h-[75px] max-w-[527px] flex justify-between items-center mt-[16px] w-full border-[2px] rounded-[10px] border-prymeblue">
        <div className="ml-[20px]">
            <h1 className="text-[20px] font-bold">{title}</h1>
            <p className="text-[18px]">{content}</p>
        </div>
        <div>
            <button className="text-[18px] font-bold text-prymeblue mr-[19px]">Оценить</button>
        </div>
    </div>
);

function UnMenElement() {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        if (isOpen && contentRef.current) {
            // Это требуется, чтобы убедиться, что браузер знает начальное состояние перед анимацией
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
            // Триггер перерисовки для начала анимации
            requestAnimationFrame(() => {
                setMaxHeight(`${contentRef.current?.scrollHeight}px`);
            });
        } else if (contentRef.current) {
            // Установите maxHeight в текущую высоту прокрутки перед анимацией сворачивания
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
            // Используйте setTimeout, чтобы дать браузеру время начать транзицию
            setTimeout(() => {
                setMaxHeight('90px');
            }, 10); // 10 миллисекунд обычно достаточно
        }
    }, [isOpen]);


    return (
        <div className={`transition-all flex flex-col mb-[20px] p-[10px] justify-between max-w-[594px] border-prymeblue border-[2px] rounded-[10px] w-full overflow-hidden`}
             style={{ maxHeight: isOpen ? maxHeight : '90px' }}>
            <div className=" flex justify-between items-center h-[90px]">
                {/* Шапка элемента, всегда видимая */}
                <div className="flex">
                    <img className="h-[64px] w-[64px]" src={profile} alt="Profile"/>
                    <div className="ml-[15px]">
                        <h1 className="text-[20px] font-bold">Петров Максим Григорьевич</h1>
                        <div className="flex ">
                            <h2 className="text-[16px]">Сеньор</h2>
                            <h2 className="ml-[37px] text-[16px] text-prymred">2 задачи</h2>
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-[18px] mr-[10px] font-bold text-prymeblue">
                    {isOpen ? 'Закрыть' : 'Открыть'}
                </button>
            </div>
            <div ref={contentRef} className="flex flex-col">
                {isOpen && (
                    <div>
                        {/* Содержимое элемента, которое раскрывается */}
                        <div className="flex mt-[20px] flex-col justify-center items-center">
                            {/* Здесь будет map для вывода DeliveryData */}
                            <DeliveryData title="Описание" content="Доставка карты Халва и заключение договора" />
                            <DeliveryData title="Получатель" content="Иванов Иван Иванов" />
                            <DeliveryData title="Получатель" content="Иванов Иван Иванов" />
                            <DeliveryData title="Получатель" content="Иванов Иван Иванов" />
                            {/* Дополнительные DeliveryData компоненты */}
                        </div>
                        <div className="mt-[20px] mb-[21px] ml- w-full flex justify-between">
                            <button className="w-[207px] h-[56px] bg-prymeblue text-[#FFF] text-[20px] font-medium rounded-[10px]">Начать</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UnMenElement;
