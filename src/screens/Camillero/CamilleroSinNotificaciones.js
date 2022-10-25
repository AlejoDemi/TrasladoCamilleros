import  {useState} from 'react';
import Box from '@mui/material/Box';
import {Button, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {InformationCard} from "./InformationCard";

export const CamilleroSinNotificaciones = () => {

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
        <h1> Sin nuevas notificaciones </h1>
        <img src='https://us.123rf.com/450wm/classicvector/classicvector2005/classicvector200500137/147415766-ilustraci%C3%B3n-plana-de-camillas-de-urgencias-equipo-m%C3%A9dico-de-dibujos-animados-para-pacientes-heridos-.jpg?ver=6'></img>
        </div>
    );
}
