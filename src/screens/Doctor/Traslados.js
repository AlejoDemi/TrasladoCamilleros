import * as React from "react";
import axios from "axios";
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const Traslados = () => {

    const [solicitudes,setSolicitudes] = useState([]);

    useEffect(()=>{
        axios.get("https://backcamilleros-production.up.railway.app/requests")
            .then((res)=>{
                console.log(res)
                setSolicitudes(res.data)
            }).catch((error)=>{
                console.log(error)
        })
    },[setTimeout(3000)])

    const getColor=(urgency)=>{
        if(urgency==="LOW")return "#4caf50"
        else if(urgency==="MEDIUM")return "#ff9800"
        return "#ef5350"
    }


        return (
            <div>
                <div style={{display:"flex",width:"100%",background:"lightgrey",height:"50px",alignItems:"center"}}>
                    <div style={{width:"20%"}}>ORIGEN</div>
                    <div style={{width:"20%"}}>DESTINO</div>
                    <div style={{width:"20%"}}>ID PACIENTE</div>
                    <div style={{width:"20%"}}>STATUS</div>
                    <div style={{width:"20%"}}>URGENCIA</div>
                </div>
                {solicitudes.map((s)=>{
                            return(
                                <div key={s.id} style={{display:"flex",width:"100%",background:getColor(s.levelOfUrgency),height:"50px",alignItems:"center"}}>
                                    <div style={{width:"20%"}}>{s.areaFrom}</div>
                                    <div style={{width:"20%"}}>{s.areaTo}</div>
                                    <div style={{width:"20%"}}>{s.patientId}</div>
                                    <div style={{width:"20%"}}>{s.status}</div>
                                    <div style={{width:"20%"}}>{s.levelOfUrgency}</div>
                                </div>
                            )
                        })}
            </div>
           
          );
}