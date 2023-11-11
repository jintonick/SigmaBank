import React, { useState, useRef, useEffect } from "react";
import './unelement.css'; // Импортируйте CSS файл с анимацией
import profile from '../../images/profile.jpg'

interface DeliveryDataProps {
    title: string;
    content: string;
}
const EmployeeData: React.FC<DeliveryDataProps> = ({ title, content }) => (
    <div className="h-[58px]] sm:h-[75px] max-w-[527px] flex justify-between items-center mt-[16px] w-full border-[1px] sm:border-[2px] rounded-[10px] border-prymeblue">
        <div className="ml-[20px]">
            <h1 className="text-[14px] sm:text-[20px] font-bold">{title}</h1>
            <p className="text-[12px] sm:text-[18px]">{content}</p>
        </div>
        <div>
            <button className="text-[12px] sm:text-[18px] font-bold text-prymeblue mr-[19px]">Оценить</button>
        </div>
    </div>
);

function UnMenElement() {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
            requestAnimationFrame(() => {
                setMaxHeight(`${contentRef.current?.scrollHeight}px`);
            });
        } else if (contentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
            setTimeout(() => {
                setMaxHeight('90px');
            }, 10);
        }
    }, [isOpen]);


    return (
        <div className={`
            transition-all 
            flex 
            flex-col 
            mb-[20px] 
            p-[10px] 
            h-full
            justify-between 
            max-w-[830px] 
            border-prymeblue 
            sm:border-[2px] 
            sm:shadow-none
            shadow-[0px_2px_5px_rgba(0,0,0,0.15)]
            rounded-[10px] 
            w-full 
            overflow-hidden`}
             style={{ maxHeight: isOpen ? maxHeight : '90px' }}>
            <div className=" flex justify-between items-center h-[58px] sm:h-[90px]">
                <div className="flex justify-center items-center">
                    <img className="h-[64px] w-[64px]" src={profile} alt="Profile"/>
                    <div className="ml-[15px]">
                        <h1 className="text-[14px] sm:text-[20px] font-bold">Петров Максим Григорьевич</h1>
                        <div className="flex text-[12px] sm:text-[16px]">
                            <h2 className="">Сеньор</h2>
                            <h2 className="ml-[37px] text-prymred">2 задачи</h2>
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-[12px] sm:text-[18px] mr-[10px] font-bold text-prymeblue">
                    {isOpen ? 'Закрыть' : 'Открыть'}
                </button>
            </div>
            <div ref={contentRef} className="flex flex-col">
                {isOpen && (
                    <div className='h-full'>
                        {/* Содержимое элемента, которое раскрывается */}
                        <div className="flex mt-[20px] flex-col justify-center items-center">
                            {/* Здесь будет map для вывода DeliveryData */}
                            <EmployeeData title="Заказ 1" content="Иванов Иван Иванов" />
                            <EmployeeData title="Заказ 2" content="Иванов Иван Иванов" />
                            <EmployeeData title="Заказ 3" content="Иванов Иван Иванов" />
                            <EmployeeData title="Заказ 4" content="Иванов Иван Иванов" />
                            <EmployeeData title="Заказ 4" content="Иванов Иван Иванов" />
                            {/* Дополнительные DeliveryData компоненты */}
                        </div>
                        <div className="mt-[20px] mb-[21px] ml- w-full flex justify-between">
                            <button className="w-[207px] h-[56px] bg-prymeblue text-[#FFF] text-[20px] font-medium rounded-[10px]">Оценить</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UnMenElement;
