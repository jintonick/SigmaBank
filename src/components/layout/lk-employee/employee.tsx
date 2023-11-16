import React, { useEffect, useState, useRef } from "react";

import UnElement from "../../universal-element/universal-element";
import EmployeeModal from "../../modal/employeemodal";
import Backdrop from "../../modal/Backdrop";

import './style.css'

interface YMapsProps {
    startPoint: string;
    endPoint: string;
}

interface Route {
    id: number;
    startPoint: string;
    endPoint: string;
    name: string;
    duration: string;
}

interface  GetTasksProps {
    userId: string;
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
    const [routes, setRoutes] = useState<Route[]>([]); // Храним задачи
    const [userLocation, setUserLocation] = useState({ longitude: '', latitude: '' });
    const [currentRoute, setCurrentRoute] = useState({ startPoint: '', endPoint: '' });
    const [openedElementId, setOpenedElementId] = useState<null | number>(null);
    const [userId, setUserId] = useState({id: 0})
    const [myMap, setMyMap] = useState<any>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const mapRef = useRef<any>(null);
    const [activeElementId, setActiveElementId] = useState<number | null>(null);
    // const routes = [
    //     {
    //         id: 1,
    //         startPoint: "55.757422, 37.631603",
    //         endPoint: "55.755591, 37.641854"
    //     },
    //     {
    //         id: 2,
    //         startPoint: "Сухаревская станция метро",
    //         endPoint: "Трубная станция метро"
    //     },
    //     {
    //         id: 3,
    //         startPoint: "Тверская станция метро",
    //         endPoint: "Арбатская станция метро"
    //     },
    // ];

        const getUser = async () => {
        try {
            const response = await fetch('https://4f2c-2a00-1370-8188-58e4-2cff-3fd-1e2c-6694.ngrok-free.app/api/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });
            const data = await response.json();
            console.log("1", data)
            setUserLocation({
                longitude: data.longitude,
                latitude: data.latitude
            });
            setUserId({
                id: data.id
            });

            // После получения данных пользователя, вызываем функцию для получения задач
            getTasks(data.id);
        } catch (error) {
            console.error('Ошибка при получении данных пользователя:', error);
        }
    };

    const getTasks = async ({ userId }: GetTasksProps) => {
        try {
            const response = await fetch(`https://4f2c-2a00-1370-8188-58e4-2cff-3fd-1e2c-6694.ngrok-free.app/api/tasks?userId=${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });
            let tasks = await response.json();

            // Добавление userLocation как startPoint для первой задачи
            if (tasks.length > 0 && userLocation.longitude && userLocation.latitude) {
                tasks[0].startPoint = `${userLocation.latitude}, ${userLocation.longitude}`;
            }

            setRoutes(tasks);
        } catch (error) {
            console.error('Ошибка при получении задач:', error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

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
        if (myMap && routes.length > 0 && userLocation.latitude && userLocation.longitude) {
            // Создаем массив referencePoints для маршрутов
            let referencePoints = routes.reduce((points, route, index) => {
                if (index === 0) {
                    points.push(`${userLocation.latitude}, ${userLocation.longitude}`); // начальная точка для первой задачи
                } else {
                    points.push(routes[index - 1].endPoint); // конечная точка предыдущей задачи как начальная точка текущей
                }
                points.push(route.endPoint); // конечная точка текущей задачи
                return points;
            }, [] as string[]); // Утверждение типа для referencePoints как массив строк

            // Создаем и добавляем маршрут на карту
            const multiRoute = new window.ymaps.multiRouter.MultiRoute({
                referencePoints: referencePoints,
                params: { routingMode: 'auto' },
            }, { boundsAutoApply: true });

            myMap.geoObjects.removeAll();
            myMap.geoObjects.add(multiRoute);
        }
    }, [myMap, routes, userLocation]);




    return (
        <div className='font-roboto'>
            <div className="sm:ml-[70px] sm:mr-[10px] ml-[25px] mr-[25px]">
                <div className="sm:grid sm:grid-cols-2 ">
                    <div className="mt-[20px]">
                        <h1 className="text-[30px] sm:block hidden font-bold mb-[20px]">Личный кабинет</h1>
                        <h1 className="text-[20px] sm:hidden block font-bold mb-[20px]">Заказы</h1>
                        <div className='flex flex-col'>
                            {routes.map((route) => (
                                <UnElement
                                    key={route.id}
                                    route={route}
                                    name={route.name}
                                    duration={route.duration}
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