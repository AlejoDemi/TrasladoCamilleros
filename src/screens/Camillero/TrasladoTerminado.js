import Button from "@mui/material/Button";
import * as React from "react";
import TextField from "@mui/material/TextField";
import {listaOrigenesYDestino} from "../Doctor/Arreglos";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";

export const TrasladoTerminado = () => {

    const [camillero, setCamillero] = useState([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCamillero(event.target.value);
    };

    return (
        <div style={{display:"flex", flexDirection:"column",backgroundImage:"url:https://blog.laboralkutxa.com/src/uploads/2018/05/Reconocimiento-facial.jpg"}}>
            <h1> ¿Termino su traslado? </h1>

            <div>
                <TextField
                    id ="Camillero"
                    select
                    label="Identificacion"
                    onChange={handleChange}
                    helperText="Seleccione su identidad"
                >
                    {listaOrigenesYDestino.map((option) => (
                        // hay que hacer la lista de camillero
                        <MenuItem key={option.name} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </div>
    );
}