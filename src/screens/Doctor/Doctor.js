import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {Button, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import axios from "axios";
import {listaIDpaciente, listaNombrePaciente, listaOrigenesYDestino} from "./Arreglos";

export const Doctor = () => {
    const [origen, setOrigen] = useState();
    const [destino, setDestino] = useState();
    const [IDpaciente, setIDpaciente] = useState();
    const [pacientes, setPacientes] = useState([]);
    const [levelOfUrgency, setLevelOfUrgency] = useState([]);

    useEffect(()=>{
        axios.get("https://backcamilleros-production.up.railway.app/patients")
            .then((res)=>{
                console.log(res)
                setPacientes(res.data)
            }).catch((error)=>{
                console.log(error)
        })
    },[])

    const sendRequest = ()=>{
        axios.post("https://backcamilleros-production.up.railway.app/request",
        {
            areaFrom : origen,
            areaTo : destino,
            patientId : IDpaciente,
            status: "PENDING",
            levelOfUrgency : levelOfUrgency
        },{
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }
        ).catch((error)=>{
            console.log(error)
        })
    }



    const handleChangeOrigen = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrigen(event.target.value);
    };

    const handleChangeDestino = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDestino(event.target.value);
    };

    const handleChangeIdPaciente = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIDpaciente(event.target.value);
    };

    const handleChangeUrgency = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLevelOfUrgency(event.target.value);
    };

    return (
        pacientes &&
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '100%',height:"100%"},
            }}
            noValidate
            autoComplete="off"
            style={{width:"50%",margin:"auto"}}
        >
            <div>
                <TextField
                    id ="Origen"
                    select
                    label="Origen"
                    onChange={handleChangeOrigen}
                    helperText="Seleccione el area desde la cual se translada el paciente"
                >
                    {listaOrigenesYDestino.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="Destino"
                    select
                    label="Destino"
                    onChange={handleChangeDestino}
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
                    id="Nombre paciente"
                    select
                    label="Nombre paciente"
                    onChange={handleChangeIdPaciente}
                    helperText="Ingrese el nombre del paciente"
                    variant="filled"
                >
                    {pacientes.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name + "__________   " +option.id.slice(0,10)}
                        </MenuItem>
                    ))}
                </TextField>
    
                <FormLabel id="demo-row-radio-buttons-group-label">Nivel de urgencia del traslado</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{ display:"flex"}}
                    onChange={handleChangeUrgency}
                >
                    <FormControlLabel value="LOW" control={<Radio />} label="1" />
                    <FormControlLabel value="MEDIUM" control={<Radio />} label="2" />
                    <FormControlLabel value="HIGH" control={<Radio />} label="3" />
                </RadioGroup>

                <Button onClick={sendRequest}>SUBMIT</Button>

            </div>
        </Box>
    );
}
