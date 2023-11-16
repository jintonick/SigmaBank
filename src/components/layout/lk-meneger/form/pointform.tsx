import React, { useState } from 'react';

interface PointFormProps {
    onClose: () => void,
}
function PointForm({ onClose }:PointFormProps) {
    const [address, setAddress] = useState('');
    const [activated, setActivated] = useState('Вчера');
    const [materials, setMaterials] = useState('Да');
    const [days, setDays] = useState('');
    const [cards, setCards] = useState('');
    const [approved, setApproved] = useState('');
    const [coordinates, setCoordinates] = useState<number[] | null>(null);

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const handleActivatedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setActivated(e.target.value);
    };

    const handleMaterialsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMaterials(e.target.value);
    };

    const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDays(e.target.value);
    };

    const handleCardsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCards(e.target.value);
    };

    const handleApprovedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setApproved(e.target.value);
    };

    const geocodeAddress = async () => {
        try {
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=dc7a4035-57ae-4160-aa24-02e2adcb819e&geocode=${address}&format=json`);
            const data = await response.json();
            const coords = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(Number);
            setCoordinates(coords);
        } catch (error) {
            console.error('Error during geocoding:', error);
        }
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await geocodeAddress();
<<<<<<< HEAD

=======
    
>>>>>>> 4e8cd5d97414db2f764d48338ace0fee9e7d9e27
        if (coordinates) {
            const response = await fetch('https://3eed-2a00-1370-8188-58e4-2cff-3fd-1e2c-6694.ngrok-free.app/api/new_point', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    coordinates: coordinates.join(' '), // Преобразование массива координат в строку
                    activated,
                    materials,
                    approved: approved.toString(),
                    days: days.toString(), // Преобразование числа в строку
                    cards: cards.toString(), // Преобразование числа в строку
                })
            });
<<<<<<< HEAD

=======
    
>>>>>>> 4e8cd5d97414db2f764d48338ace0fee9e7d9e27
            if (response.ok) { // Проверяем, что запрос успешен
                onClose();
            }
            console.log(response);
        }
    };


    return (
        <div className="max-w-[1295px] w-full z-1000 p-[20px] bg-[#FFF] justify-center items-center h-[285px] rounded-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.15)]">
            <form onSubmit={handleSubmit} className="flex w-full h-full" >
                <div className="flex">
                    <div>
                        <div>
                            <label className="text-authgray text-[14px] font-bold">Адрес точки</label>
                            <input
                                type="text"
                                className="rounded-[5px] w-full max-w-[340px] h-[40px] border-[1px] border-prymeblue"
                                value={address}
                                onChange={handleAddressChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-authgray text-[14px] font-bold">Когда подключена точка?</label>
                            <select
                                className="rounded-[5px] w-full max-w-[340px] h-[40px] border-[1px] border-prymeblue"
                                value={activated}
                                onChange={handleActivatedChange}
                            >
                                <option value="вчера">Вчера</option>
                                <option value="давно">Давно</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="text-authgray text-[14px] font-bold">Карта и материалы доставлены?</label>
                            <select
                                className="rounded-[5px] w-full max-w-[340px] h-[40px] border-[1px] border-prymeblue"
                                value={materials}
                                onChange={handleMaterialsChange}
                            >
                                <option value="да">Да</option>
                                <option value="нет">Нет</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-authgray text-[14px] font-bold">Кол-во дней после выдачи последней карты?</label>
                            <input
                                type="text"
                                className="rounded-[5px] w-full max-w-[340px] h-[40px] border-[1px] border-prymeblue"
                                value={days}
                                onChange={handleDaysChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="text-authgray text-[14px] font-bold">Кол-во одобренных заявок</label>
                            <input
                                type="text"
                                className="rounded-[5px] w-full max-w-[340px] h-[40px] border-[1px] border-prymeblue"
                                value={approved}
                                onChange={handleApprovedChange}
                            />
                        </div>
                        <div>
                            <label className="text-authgray text-[14px] font-bold">Кол-во выданных карт</label>
                            <input
                                type="text"
                                className="rounded-[5px] w-full max-w-[340px] h-[40px] border-[1px] border-prymeblue"
                                value={cards}
                                onChange={handleCardsChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-[15px]">
                    <button type="submit" className="w-[100px] h-[56px] bg-prymeblue text-[#FFF] text-[14px] font-medium rounded-[10px]">Отправить</button>
                </div>
            </form>
        </div>
    );
}

export default PointForm;
