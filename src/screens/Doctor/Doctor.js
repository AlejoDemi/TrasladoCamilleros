import  {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const listaOrigenesYDestino = [
    {
        name: 'Pediatria',
    },
    {
        name: 'Cardiologia',
    },
    {
        name: 'Cirujia',
    },
    {
        name: 'Rayos',
    },
];

const listaIDpaciente = [
    {
        name: '43573888',
    },
    {
        name: '46739008',
    },
    {
        name: '36789899',
    },
    {
        name: '78900888',
    },
];

const listaNombrePaciente = [
    {
        name: 'Justina Galarce',
    },
    {
        name: 'Sofia Tartara',
    },
    {
        name: 'Agustina Verschoor',
    },
    {
        name: 'Maria Moroni Krause',
    },
];

export const Doctor = () => {
    const [origen, setOrigen] = useState();
    const [destino, setDestino] = useState();
    const [IDpaciente, setIDpaciente] = useState();
    const [nombrePaciente, setNombrePaciente] = useState();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrigen(event.target.value);
        setDestino(event.target.value);
        setIDpaciente(event.target.value);
        setNombrePaciente(event.target.value);
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
                    onChange={handleChange}
                    helperText="Seleccione el area desde la cual se translada el paciente"
                >
                    {listaOrigenesYDestino.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Destino"
                    onChange={handleChange}
                    helperText="Seleccione el area a donde se translada el paciente"
                >
                    {listaOrigenesYDestino.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Nombere paciente"
                    onChange={handleChange}
                    helperText="Ingrese el nombre del paciente"
                    variant="filled"
                >
                    {listaNombrePaciente.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="filled-select-currency-native"
                    select
                    label="ID paciente"
                    onChange={handleChange}
                    helperText="Ingrese el ID del paciente"
                    variant="filled"
                >
                    {listaIDpaciente.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>

                <FormLabel id="demo-row-radio-buttons-group-label">Nivel de urgencia del traslado</FormLabel>
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
