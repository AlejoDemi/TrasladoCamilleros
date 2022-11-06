import * as React from "react";
import Button from "@mui/material/Button";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const ChequeoDePaciente = () => {

    const navigate=useNavigate()

const startDrive=()=>{
    axios.put(`https://backcamilleros-production.up.railway.app/request/start/${window.localStorage.getItem("requestId")}`)
    .then(()=>{
        navigate("/trasladoTerminado")
        
    }).catch((error)=>{
    console.log(error)
    })
}

    return (
        <div style={{display:"flex", flexDirection:"column",backgroundImage:"url:https://blog.laboralkutxa.com/src/uploads/2018/05/Reconocimiento-facial.jpg"}}>
            <h1> ¿Identifico al paciente correcto? </h1>
            <div style={{height: "200px", width:"650px", objectFit: "contain", overflow: "hidden"}}>
                {<img style={{maxHeight: "100%", maxWidth: "100%"}}
                    src='https://th.bing.com/th/id/OIP.MqJJMhxWDmwNzTUW7wE-OQHaHa?pid=ImgDet&rs=1'></img>
                }
            </div>

            <Button variant="contained" color="success" style={{width:"100px",margin:"auto"}} onClick={startDrive}>
                SI
            </Button>

        </div>
    );
}