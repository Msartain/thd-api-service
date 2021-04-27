import React, { useState } from 'react';
import useInputState from '../../hooks/useInputState';

const Car = () => {

    const [id, handleIdChange, resetId] = useInputState('');
    const [car, setCar] = useState([])

    const handleClick = async () => {
        const response = await fetch(`http://localhost:3000/cars/${id}`);
        const data = await response.json();
        console.log(data[0]);
        setCar(data[0]);
    }
    
    let display = car ?
        <div className="car">
            <p>{car.make}</p>
            <p>{car.model}</p>
            <p>{car.package}</p>
            <p>{car.color}</p>
            <p>{car.category}</p>
            <p>{car.mileage}</p>
            <p>{car.price}</p>
            <p>{car.id}</p>
        </div>
        :
        null;

    return (
        <div className="car">
            <input type="text" value={id} onChange={handleIdChange}></input>
            <button onClick={handleClick}>Search By ID</button>
            {display}
        </div>
    )
}

export default Car;
