import React from 'react';

import TextField from '@material-ui/core/TextField';
const filterValues = [
    {
        value: 'Название',
        label: 'Название',
    },
    {
        value: 'Количество',
        label: 'Количество',
    },
    {
        value: 'Расстояние',
        label: 'Расстояние',
    },
];


export const Filter = ({ visibleFilterPopup,filterName ,filterDistance}) => {

    const [filterValue, setFilterValue] = React.useState('Название');
    const handleChange = (event) => {
        setFilterValue(event.target.value);
    };
    return (
        <>
            {visibleFilterPopup && <div>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    value={filterValue}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Выберите колонку фильтрации"
                    variant="outlined"
                >
                    {filterValues.map((option) => (<option key={option.value} value={option.value}>
                        {option.label}
                    </option>)
                    )}
                </TextField>
                
                {filterValue === "Название" ? <TextField id="filled-basic" onChange={(e) => filterName(e.target.value)}label="Введите название" variant="filled" /> :  
                 filterValue === 'Количество' ? <TextField id="filled-basic" onChange={(e) => filterName(e.target.value)}label="Введите количество" variant="filled" /> : filterValue === 'Расстояние' && <TextField id="filled-basic" onChange={(e) => filterDistance(e.target.value)}label="Введите расстояние" variant="filled" />}
                
            </div>}
            
        </>
    )
}