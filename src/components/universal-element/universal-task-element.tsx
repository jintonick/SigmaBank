import React from "react";

interface UNTaskProps {
    id: number;
    title: string;
    // Другие поля...
}
function UNTask({ id, title }: UNTaskProps) {
    return (
        <div className='max-w-[330px]
                        sm:w-full
                        flex
                        flex-col sm:flex-row
                        justify-between
                        h-[110px] sm:h-[120px]
                        rounded-[10px]
                        bg-lightred
                        shadow-[2px_2px_5px_rgba(0,0,0,0.15)]
                        text-[12px] sm:text-[18px]
                        py-[11px]
                        pl-[14px] pr-[11vw]
                        sm:pl-[22px]  sm:pr-[1vw]'>
            <div className='flex h-full w-full flex-col justify-start items-start'>
                <h1 className='text-[14px] sm:text-[20px] font-bold'>Заказ №{id}</h1>
                <h1 className='sm:my-[5px]'>{title}</h1>
                <h1 className='font-bold'>Васильев Петр</h1>
            </div>
            <div className='flex justify-start sm:justify-center items-center'>
                <button className='font-bold text-prymeblue'>Оценено</button>
            </div>
        </div>
    )
}

export default UNTask;
