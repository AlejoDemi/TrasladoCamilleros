import * as React from "react";
import Button from "@mui/material/Button";

export const ChequeoDePaciente = () => {
    return (
        <div style={{display:"flex", flexDirection:"column",backgroundImage:"url:https://blog.laboralkutxa.com/src/uploads/2018/05/Reconocimiento-facial.jpg"}}>
            <h1> ¿Identifico al paciente correcto? </h1>
            <div style={{height: "200px", width:"650px", objectFit: "contain", overflow: "hidden"}}>
                {<img style={{maxHeight: "100%", maxWidth: "100%"}}
                    src='https://th.bing.com/th/id/OIP.MqJJMhxWDmwNzTUW7wE-OQHaHa?pid=ImgDet&rs=1'></img>
                }
            </div>

            <Button variant="contained" color="success">
                SI
            </Button>

        </div>
    );
}