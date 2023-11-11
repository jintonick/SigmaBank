import React, { useEffect, useRef } from 'react';
import { YMaps } from "@pbe/react-yandex-maps";

interface YMapsProps {
    startPoint: string;
    endPoint: string;
}

const MyMapComponent = ({ startPoint, endPoint }:YMapsProps) => {
    const mapRef = useRef<ymaps.Map | null>(null);

    useEffect(() => {
        if (window.ymaps && startPoint && endPoint) {
            window.ymaps.ready(() => {
                if (!mapRef.current) {
                    const newMap = new window.ymaps.Map("map-mobile", {
                        center: [55.75, 37.57],
                        zoom: 9,
                    });
                    mapRef.current = newMap;
                }

                const multiRoute = new window.ymaps.multiRouter.MultiRoute({
                    referencePoints: [startPoint, endPoint],
                    params: { routingMode: 'auto' },
                }, { boundsAutoApply: true });

                mapRef.current.geoObjects.removeAll();
                mapRef.current.geoObjects.add(multiRoute);
            });
        }
    }, [startPoint, endPoint]);

    return (
        <div className="h-[424px] justify-center items-center mb-[5px]">
            <div id="map-mobile" className="w-full h-full"></div>
        </div>
    );
};

export default MyMapComponent;
