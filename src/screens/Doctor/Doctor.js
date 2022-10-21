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
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Origen"
                    value={currency}
                    onChange={handleChange}
                    helperText="Seleccione el area desde la cual se translada el paciente"
                >
                    {areas.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Destino"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Seleccione el area a donde se translada el paciente"
                >
                    {areas.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </div>
            <div>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Nombere paciente"
                    value={currency}
                    onChange={handleChange}
                    helperText="Ingrese el nombre del paciente"
                    variant="filled"
                >
                    {areas.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="filled-select-currency-native"
                    select
                    label="ID paciente"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your currency"
                    variant="filled"
                >
                    {areas.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>

                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                </RadioGroup>

            </div>
        </Box>
    );
}
