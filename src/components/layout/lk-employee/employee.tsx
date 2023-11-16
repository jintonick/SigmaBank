import React, { useEffect, useState, useRef } from "react";

import UnElement from "../../universal-element/universal-element";
import EmployeeModal from "../../modal/employeemodal";
import Backdrop from "../../modal/Backdrop";

import './style.css'

interface YMapsProps {
    startPoint: string;
    endPoint: string;
}

const YANDEX_MAPS_API = "https://api-maps.yandex.ru/2.1/?apikey=dc7a4035-57ae-4160-aa24-02e2adcb819e&lang=ru_RU";

const loadYandexMaps = (callback: () => void) => {
    const existingScript = document.getElementById("yandexMapsScript");

    if (!existingScript) {
        const script = document.createElement("script");
        script.src = YANDEX_MAPS_API;
        script.id = "yandexMapsScript";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (callback && window.ymaps) callback();
        };
    } else if (window.ymaps && callback) {
        callback();
    }
};


function Employee() {
    const [currentRoute, setCurrentRoute] = useState({ startPoint: '', endPoint: '' });
    const [openedElementId, setOpenedElementId] = useState<null | number>(null);
    const [myMap, setMyMap] = useState<any>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const mapRef = useRef<any>(null);
    const [activeElementId, setActiveElementId] = useState<number | null>(null);
    const routes = [
        {
            id: 1,
            startPoint: "Курскская станция метро",
            endPoint: "Бауманская станция метро"
        },
        {
            id: 2,
            startPoint: "Сухаревская станция метро",
            endPoint: "Трубная станция метро"
        },
        {
            id: 3,
            startPoint: "Тверская станция метро",
            endPoint: "Арбатская станция метро"
        },
    ];

    const handleCloseElement = (id: number) => {
        if (openedElementId === id) {
            setOpenedElementId(null);
        }
    }

    const handleComplete = (id: number) => {
        // Now you can use the id to know which task was completed
        console.log(`Task with id ${id} was completed.`);
        setActiveElementId(id);
        setModalIsOpen(true);
    };;

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleRouteChange = (startPoint: string, endPoint: string, id: number) => {
        console.log("Обновление маршрута:", startPoint, endPoint);
        setCurrentRoute({ startPoint, endPoint });
        setOpenedElementId(id);
    };

    useEffect(() => {
        loadYandexMaps(() => {
            window.ymaps.ready(() => {
                if (!mapRef.current) { // Проверяем, существует ли уже карта
                    const newMap = new window.ymaps.Map("map", {
                        center: [55.75, 37.57],
                        zoom: 9,
                    });
                    mapRef.current = newMap; // Сохраняем карту в ref
                }
            });
        });
    }, []);

    useEffect(() => {
        const myMap = mapRef.current;
        if (myMap && currentRoute.startPoint && currentRoute.endPoint) {
            const multiRoute = new window.ymaps.multiRouter.MultiRoute({
                referencePoints: [currentRoute.startPoint, currentRoute.endPoint],
                params: { routingMode: 'auto' },
            }, { boundsAutoApply: true });
            console.log("Обновление карты с маршрутом:", currentRoute.startPoint, currentRoute.endPoint);
            myMap.geoObjects.removeAll();
            myMap.geoObjects.add(multiRoute);
        }
    }, [myMap, currentRoute]);


    return (
        <div className='font-roboto'>
            <div className="sm:ml-[70px] sm:mr-[10px] ml-[25px] mr-[25px]">
                <div className="sm:grid sm:grid-cols-2 ">
                    <div className="mt-[20px]">
                        <h1 className="text-[30px] sm:block hidden font-bold mb-[20px]">Личный кабинет</h1>
                        <h1 className="text-[20px] sm:hidden block font-bold mb-[20px]">Заказы</h1>
                        <div className='flex flex-col'>
                            {routes.map(route => (
                                <UnElement
                                    key={route.id}
                                    route={route}
                                    onOpen={() => handleRouteChange(route.startPoint, route.endPoint, route.id)}
                                    onComplete={() => handleComplete(route.id)}
                                />
                            ))}
                        </div>
                        {modalIsOpen && <Backdrop show clicked={closeModal} />}
                        {modalIsOpen && <EmployeeModal closeModal={closeModal} />}
                    </div>
                    <div className="pl-[50px] h-[850px] w-[920px] sm:flex hidden h-screen justify-center items-start">
                        <div className=" h-[850px] w-[920px]">
                            <div id="map" className=" w-full h-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee;