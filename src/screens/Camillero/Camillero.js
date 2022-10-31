import  {useState} from 'react';
import Box from '@mui/material/Box';
import {Button, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {InformationCard} from "./InformationCard";

export const Camillero = () => {
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

                <InformationCard description={"paciente, id, medico q lo solicito, destino, origen"} codeUrgency={"numero de urgencia"} ></InformationCard>

            </div>
        </Box>
    );
}
