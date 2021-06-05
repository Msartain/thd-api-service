import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../theme';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table:{
        margin: 'auto',
        padding: '30px 0',
    },
    head: {
        background: theme.palette.primary.main,
    },
    headCell: {
        color: theme.palette.secondary.main,
        fontWeight: 700
    },
    root: {
        margin: '30px 0'
    },
});

const Inventory = () => {
    const classes = useStyles();

    const [cars, setCars] = useState([]);
    const [buttonText, setButtonText] = useState('See All Inventory');

    const handleClick = async () => {
        if (!cars.length) {
            const response = await fetch('http://localhost:3000/cars');
            const data = await response.json();
            setCars(data);
            setButtonText('Clear');
        } else {
            setButtonText('See All Inventory');
            setCars([]);
        }
    }



    const display = cars.length ? 
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead className={classes.head}>
                    <TableRow>
                        <TableCell className={classes.headCell}>Make</TableCell>
                        <TableCell className={classes.headCell}>Model</TableCell>
                        <TableCell className={classes.headCell}>Package</TableCell>
                        <TableCell className={classes.headCell}>Color</TableCell>
                        <TableCell className={classes.headCell}>Year</TableCell>
                        <TableCell className={classes.headCell}>Category</TableCell>
                        <TableCell className={classes.headCell}>Mileage</TableCell>
                        <TableCell className={classes.headCell}>Price</TableCell>
                        <TableCell className={classes.headCell}>ID</TableCell>
                    </TableRow> 
                </TableHead>
                <TableBody>
                {cars.map((car) => {
                    return (
                        <TableRow key={uuidv4()}>
                            <TableCell>{car.make}</TableCell>
                            <TableCell>{car.model}</TableCell>
                            <TableCell>{car.package}</TableCell>
                            <TableCell>{car.color}</TableCell>
                            <TableCell>{car.year}</TableCell>
                            <TableCell>{car.category}</TableCell>
                            <TableCell>{car.mileage}</TableCell>
                            <TableCell>{car.price}</TableCell>
                            <TableCell>{car.id}</TableCell>
                        </TableRow>
                )
            })}
                </TableBody>
            </Table>
        </TableContainer>
        :
        null;


    return (
        <div className="inventory">
            <ThemeProvider theme={theme}>
                <Button className={classes.root} onClick={handleClick}>{buttonText}</Button>
            </ThemeProvider>
            {display}
        </div>
    )
}

export default Inventory;
