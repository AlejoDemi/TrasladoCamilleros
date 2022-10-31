import * as React from "react";
import Button from "@mui/material/Button";

export const ChequeoDePaciente = () => {
    return (
        <div style={{display:"flex", flexDirection:"column",backgroundImage:"url:https://blog.laboralkutxa.com/src/uploads/2018/05/Reconocimiento-facial.jpg"}}>
            <h1> ¿Identifico al paciente correcto? </h1>
            <div>
                {//<img src='https://blog.laboralkutxa.com/src/uploads/2018/05/Reconocimiento-facial.jpg'></img>
                }
            </div>

            <Button variant="contained" color="success">
                SI
            </Button>
            <Button variant="outlined" color="error">
                NO
            </Button>
        </div>
    );
}