import React, { useState } from 'react';
import useInputState from '../../hooks/useInputState';
import './car.css';

const Car = () => {

    const [id, handleIdChange, resetId] = useInputState('');
    const [car, setCar] = useState([]);
    const [buttonText, setButtonText] = useState('Search by License');

    const handleClick = async () => {
        if(!car.make) {
            const response = await fetch(`http://localhost:3000/cars/${id}`);
            const data = await response.json();
            setCar(data);
            setButtonText('Clear')
        } else {
            setButtonText('Search by License');
            setCar([]);
            resetId('');
        }
    }
    
    let display = car.make ?
    <div className="car-card-container">
        <div className="car-card">
            <p>Model: {car.make} {car.model} - {car.package}</p>
            <p>Color: {car.color}</p>
            <p>Type: {car.category}</p>
            <p>Mileage: {parseFloat(car.mileage).toFixed(2)}</p>
            <p>Price: ${parseFloat(car.price).toFixed(2)}</p>
            <p>License: {car.id}</p>
        </div>
    </div>
        :
        null;

    return (
        <div className="car">
            <input placeholder=" What is your license #" type="text" value={id} onChange={handleIdChange}></input>
            <button className="styled-button" onClick={handleClick}>{buttonText}</button>
            {display}
        </div>
    )
}

export default Car;
