import  {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const areas = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export const Doctor = () => {
    const [currency, setCurrency] = useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '100%',height:"100%"},
            }}
            noValidate
            autoComplete="off"
        >

            <div>


                <FormLabel id="demo-row-radio-buttons-group-label">Traslado solicitado</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="1" control={<Radio />} label="Aceptar" />
                    <FormControlLabel value="2" control={<Radio />} label="Rechazar" />
                </RadioGroup>

            </div>
        </Box>
    );
}
