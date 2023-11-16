import React from "react";
import './employeemodal.css'

interface EmployeeModalProps {
    closeModal: () => void; // closeModal is a function that doesn't take any arguments and doesn't return anything
}
function EmployeeModal({ closeModal }: EmployeeModalProps) {
    return (
        <div className="modal">
            <div className="h-[471px] w-[490px] bg-[#FFF] rounded-[10px] px-[32px] pt-[32px] ">
                <h1 className="text-[24px] mb-[20px] font-bold">Хотите оставить комментарий?</h1>
                <input type="text" className="h-[295px] w-[423px] rounded-[10px] border-[1px] border-authgray"/>
                <div className="flex justify-between items-center mt-[15px]">
                    {/* Call closeModal when "Пропустить" is clicked */}
                    <button onClick={closeModal} className="w-[207px] h-[56px] bg-prymred text-[#FFF] text-[20px] font-medium rounded-[10px]">Пропустить</button>
                    <button className="w-[207px] h-[56px] bg-prymeblue text-[#FFF] text-[20px] font-medium rounded-[10px]">Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeModal;
