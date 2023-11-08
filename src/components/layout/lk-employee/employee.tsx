import React from "react";
import UnElement from "../../universal-element/universal-element";
import {Map, YMaps} from "@pbe/react-yandex-maps";

function Employee() {
    return (
        <div>
            <div className="ml-[70px] mr-[10px] mt-[28px]">
                <div className="sm:grid sm:grid-cols-2 ">
                    <div>
                        <h1 className="text-[30px] font-bold mb-[20px]">Личный кабинет</h1>
                        <div className='flex flex-col'>
                            <UnElement />
                            <UnElement />
                            <UnElement />
                        </div>
                    </div>
                    <div className="sm:flex hidden h-screen justify-center items-center">
                        <YMaps>
                            <Map className="h-full w-full" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                        </YMaps>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee;