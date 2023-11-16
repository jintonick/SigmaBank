import React, { useState } from 'react';

function PointForm() {
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
        if (coordinates) {
            const response = await fetch('localhost:8080/api/new_point', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    coordinates: coordinates.join(', '), // Преобразование массива координат в строку
                    activated,
                    materials,
                    days: days.toString(), // Преобразование числа в строку
                    cards: cards.toString(), // Преобразование числа в строку
                })
            });
            console.log(response)
        }
    };

    return (
        <div className="w-[300px] p-[20px] flex flex-col justify-center items-center h-[500px] rounded-[10px] border-[1px]">
            <h1 className="text-[24px] mb-[20px] font-bold">Форма точки</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Адрес точки</label>
                    <input
                        type="text"
                        className="rounded-[5px] w-full border-[1px] border-authgray"
                        value={address}
                        onChange={handleAddressChange}
                    />
                </div>
                <div>
                    <label>Когда подключена точка?</label>
                    <select
                        className="w-full rounded-[5px] border-[1px] border-authgray"
                        value={activated}
                        onChange={handleActivatedChange}
                    >
                        <option value="Вчера">Вчера</option>
                        <option value="Давно">Давно</option>
                    </select>
                </div>
                <div>
                    <label>Карта и материалы доставлены?</label>
                    <select
                        className="w-full rounded-[5px] border-[1px] border-authgray"
                        value={materials}
                        onChange={handleMaterialsChange}
                    >
                        <option value="Да">Да</option>
                        <option value="Нет">Нет</option>
                    </select>
                </div>
                <div>
                    <label>Кол-во дней после выдачи последней карты?</label>
                    <input
                        type="text"
                        className="rounded-[5px] w-full border-[1px] border-authgray"
                        value={days}
                        onChange={handleDaysChange}
                    />
                </div>
                <div>
                    <label>Кол-во одобренных заявок</label>
                    <input
                        type="text"
                        className="rounded-[5px] w-full border-[1px] border-authgray"
                        value={approved}
                        onChange={handleApprovedChange}
                    />
                </div>
                <div>
                    <label>Кол-во выданных карт</label>
                    <input
                        type="text"
                        className="rounded-[5px] w-full border-[1px] border-authgray"
                        value={cards}
                        onChange={handleCardsChange}
                    />
                </div>
                <div className="flex justify-between items-center mt-[15px]">
                    <button type="submit" className="w-[100px] h-[56px] bg-prymeblue text-[#FFF] text-[14px] font-medium rounded-[10px]">Отправить</button>
                </div>
            </form>
        </div>
    );
}

export default PointForm;