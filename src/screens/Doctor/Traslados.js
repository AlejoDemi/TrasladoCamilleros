import * as React from "react";
import axios from "axios";
import {useEffect, useState} from 'react';



export const Traslados = () => {

    const [solicitudes,setSolicitudes] = useState([]);

    useEffect(()=>{
        axios.get("https://backcamilleros-production.up.railway.app/requests")
            .then((res)=>{
                setSolicitudes(res.data.filter(filterRequests))
            }).catch((error)=>{
                console.log(error)
        })
    },[setTimeout(3000)])


    const filterRequests=(req)=>{
        return req.status!=="CLOSED"
    }

    const getColor=(status)=>{
        console.log(status)
        if(status==="IN_COURSE")return "#25ff2f"
        else if(status==="ACCEPTED")return "#fff200"
        return "#ff2a22"
    }

        return (
            solicitudes.length>0 &&
            <div style={{height:"80vh",overflowY:"auto",overflowX:"hidden"}}>
                <div style={{display:"flex",width:"100%",background:"lightgrey",height:"50px",alignItems:"center"}}>
                    <div style={{width:"20%"}}>ORIGEN</div>
                    <div style={{width:"20%"}}>DESTINO</div>
                    <div style={{width:"20%"}}>ID PACIENTE</div>
                    <div style={{width:"20%"}}>STATUS</div>
                    <div style={{width:"20%"}}>URGENCIA</div>
                </div>
                {solicitudes.map((s)=>{
                            return(
                                <div key={s.id} style={{display:"flex",width:"100%",background:getColor(s.status),height:"50px",alignItems:"center",border:"1px solid black"}}>
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