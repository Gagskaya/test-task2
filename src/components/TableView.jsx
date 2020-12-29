import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { TableHead } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: '50%',
      marginTop: '15px',
      height: '190px',
      boxShadow: '1px 1px 10px 1px rgba(0,0,0.2)',
      display : 'inline-block',
      
    },
    title: {
      fontSize: 14,
    },
    phone: {
      marginBottom: 12,
    },
    th: {
      minWidth: '150px'
    },
    table: {
      marginTop: '10px'
    }
  });
export const TableView = ({ items }) => {
    const classes = useStyles();
    
    return (
        <TableContainer component={Paper} className="animate__animated animate__bounceInUp">
            <Table className={classes.table} size="small" aria-label="simple table responsive table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Дата</TableCell>
                        <TableCell align="right">Количество</TableCell>
                        <TableCell align="right">Расстояние</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {items && items.map(item =>    <TableRow key={item.id}>
                        <TableCell scope="row" className={classes.th}>
                            {item.name}
                        </TableCell>
                        <TableCell>{item.date} </TableCell>
                        <TableCell style={{textAlign: 'center'}}>{item.amount}</TableCell>
                        <TableCell align="right">{item.distance} км</TableCell>
                    </TableRow>)}
                </TableBody>

            </Table>
        </TableContainer>
    )
}
