import React, { useState } from 'react';
import './inventory.css';
import { v4 as uuidv4 } from 'uuid';


const Inventory = (props) => {
    const [cars, setCars] = useState([]);
    const [buttonText, setButtonText] = useState('See All Inventory');

    const handleClick = async () => {
        if (!cars.length) {
            const response = await fetch('http://localhost:3000/cars');
            const data = await response.json();
            console.log(data);
            setCars(data);
            setButtonText('Clear')
        } else {
            setButtonText('See All Inventory')
            setCars([])
        }
    }



    const display = cars.length ? 
        <table className="cars-table">
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Package</th>
                    <th>color</th>
                    <th>Year</th>
                    <th>Category</th>
                    <th>Mileage</th>
                    <th>price</th>
                    <th>ID</th>
                </tr> 
            </thead>
            <tbody>
            {cars.map((car) => {
                return (
                    
                        <tr key={uuidv4()}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.package}</td>
                            <td>{car.color}</td>
                            <td>{car.year}</td>
                            <td>{car.category}</td>
                            <td>{car.mileage}</td>
                            <td>{car.price}</td>
                            <td>{car.id}</td>
                        </tr>
                    
            )
        })}
            </tbody>
        </table>
        :
        null;


    return (
        <div className="inventory">
            {display}
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}

export default Inventory;
