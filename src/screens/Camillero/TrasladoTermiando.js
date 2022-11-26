import Button from "@mui/material/Button";
import * as React from "react";
import axios from "axios";
import { useActionData, useNavigate } from "react-router-dom";

export const TrasladoTerminado = () => {

    const navigate = useNavigate()

    const finishDrive =()=>{
         axios.put(`https://soy-jugaso.up.railway.app/request/close/${window.localStorage.getItem("requestId")}`)
      .then(()=>{
          navigate("/camillero")
          
      }).catch((error)=>{
      console.log(error)
      })
    }

    return (
        <div style={{display:"flex", flexDirection:"column",backgroundImage:"url:https://blog.laboralkutxa.com/src/uploads/2018/05/Reconocimiento-facial.jpg"}}>
            <h1> ¿Termino su traslado? </h1>
            <Button variant="contained" color="success" onClick={finishDrive}>
                SI
            </Button>
        </div>
    );
}