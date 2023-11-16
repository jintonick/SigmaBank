import React from 'react';
import './Backdrop.css'; // Путь к вашему CSS файлу


interface BackdropProps {
    show: boolean; // show is a boolean
    clicked: (event: React.MouseEvent<HTMLDivElement>) => void; // clicked is a function that doesn't take any arguments and doesn't return anything
}
const Backdrop = ({ show, clicked }: BackdropProps) => (
    show ? <div className="backdrop" onClick={clicked}></div> : null
);

export default Backdrop;