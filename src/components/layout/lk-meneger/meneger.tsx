import React, { useState, useEffect } from "react";
import Header from "../header/header";
import UnMenElement from "../../universal-element/uneversal-meneger-component";
import UNTask from "../../universal-element/universal-task-element";
import arrowright from "../../../images/arrow-right.svg"
import Footer from "../footer/footer";
import arrowdown from '../../../images/arrow-down.svg'
import gitdiff from '../../../images/git-diff.svg'
import plus2 from '../../../images/plus2.svg'

interface Task {
    id: number;
    title: string;
    // Другие поля...
}
function Meneger() {
    const taskCount = 7; // Измените это число для тестирования
    const tasks: Task[] = Array.from({ length: taskCount }, (_, i) => ({ id: i, title: `Task ${i + 1}` }));

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    const [maxItems, setMaxItems] = useState(5); // Изначально установлено 5 элементов

    const checkScreenSize = () => {
        const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
        setMaxItems(isSmallScreen ? 2 : 5); // 2 элемента для маленьких экранов, 5 для больших
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const displayedTasks = showAll ? tasks : tasks.slice(0, maxItems);

    return (
        <div className="font-roboto w-full h-full">
            {/*<Header />*/}
            <div className="sm:mt-[27px] pt-[15px] w-full h-full sm:pl-[70px] pl-[25px] pr-[25px] sm:pr-[63px]">
                <div className='mb-[17px] sm:mb-[20px]'>
                    <div className='sm:flex hidden justify-between items-center mr-[47px]'>
                        <div>
                            <h1 className='text-[30px] font-bold'>Главная страница</h1>
                        </div>
                        <div>
                            <button className='text-[18px] font-bold text-prymeblue'>Распределить задачи</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex w-full flex-wrap gap-[20px] sm:gap-[20px] sm:mt-[20px]'>
                            {displayedTasks.map((task, index) => (
                                <UNTask key={index} id={task.id + 1} title={task.title} />
                            ))}
                        </div>
                        <div className='sm:block hidden'>
                            {tasks.length > 5 && (
                                <div className='mt-[25px]'>
                                    <button className='h-[37px] w-[37px]' onClick={toggleShowAll} style={{ transform: `rotate(${showAll ? 90 : 0}deg)`, transition: 'transform 0.3s' }}>
                                        <img src={arrowright}/>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className=' h-[110px] w-[28px] flex sm:hidden flex-col gap-y-[8px]'>
                            <div>
                                <button><img src={plus2}/></button>
                            </div>
                            <div>
                                <button><img src={gitdiff}/></button>
                            </div>
                            <button onClick={toggleShowAll} style={{ transform: `rotate(${showAll ? 180 : 0}deg)`, transition: 'transform 0.3s' }}>
                                <img src={arrowdown}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mb-[15px] sm:mb-[20px]'>
                        <h1 className='text-[18px] sm:text-[26px] font-bold'>Сотрудники</h1>
                    </div>
                    <div className='flex flex-wrap gap-x-[70px]'>
                        <UnMenElement/>
                        <UnMenElement/>
                        <UnMenElement/>
                        <UnMenElement/>
                        <UnMenElement/>
                    </div>
                </div>
            </div>
            {/*<div className='flex items-end justify-center h-screen'>*/}
            {/*    <Footer />*/}
            {/*</div>*/}
        </div>
    )
}

export default Meneger;