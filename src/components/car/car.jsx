import React, { useState } from 'react';
import useInputState from '../../hooks/useInputState';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../theme';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    car:{
        margin: '30px 0'
    },
    input: {
        marginRight: '20px',
        borderRadius: 0,
        border: '1px solid #999',
        height: '35px',
        width: '200px',
    }
});

const Car = () => {
    const classes = useStyles();

    const [id, handleIdChange, resetId] = useInputState('');
    const [car, setCar] = useState([]);
    const [buttonText, setButtonText] = useState('Search by License');

    const handleClick = async () => {
        if(!car.make) {
            const response = await fetch(`http://localhost:3000/cars/${id}`);
            const data = await response.json();
            setCar(data);
            setButtonText('Clear');
        } else {
            setButtonText('Search by License');
            setCar([]);
            resetId('');
        }
    }
    
    let display = car.make ?
        <Card className={classes.car}>
            <CardContent>
                <p>Model: {car.make} {car.model} - {car.package}</p>
                <p>Color: {car.color}</p>
                <p>Type: {car.category}</p>
                <p>Mileage: {parseFloat(car.mileage).toFixed(2)}</p>
                <p>Price: ${parseFloat(car.price).toFixed(2)}</p>
                <p>License: {car.id}</p>
            </CardContent>
        </Card>
        :
        null;

    return (
        <div>
            <ThemeProvider theme={theme}>
            <input className={classes.input} placeholder=" license #" type="text" value={id} onChange={handleIdChange}></input>
            <Button onClick={handleClick}>{buttonText}</Button>
            {display}
            </ThemeProvider>
        </div>
    )
}

export default Car;
