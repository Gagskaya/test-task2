import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import classNames from 'classnames'
import { useState } from 'react';
import { TableHead } from '@material-ui/core';
export const TableView = ({ date, name, amount, distance, classes, translate }) => {
    const [activeItem, setActiveItem] = useState(false);
    return (
        <TableContainer component={Paper} className="animate__animated animate__bounceInUp">
            <Table className={classes.table} size="small" aria-label="simple table responsive table">
                <TableHead>
                    <TableRow>
                        <TableCell>{translate ? 'Название' : 'Name'}</TableCell>
                        <TableCell align="right">{translate ? 'Дата' : 'Date'}</TableCell>
                        <TableCell align="right">{translate ? 'Количество' : 'Amount'}</TableCell>
                        <TableCell align="right">{translate ? 'Расстояние' : 'Distance'}</TableCell>
                    
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell scope="row" className={classes.th}>
                            {name}
                        </TableCell>
                        <TableCell>{date} </TableCell>
                        <TableCell>{amount}</TableCell>
                        <TableCell align="right">{distance} км</TableCell>
                        {/* <TableCell align="right"><Icon onClick={() => setActiveItem(!activeItem)} className={classNames('star-icon', activeItem ? 'active' : '')}>star</Icon></TableCell> */}
                    </TableRow>
                </TableBody>

            </Table>
        </TableContainer>
    )
}
