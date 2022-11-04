import {useEffect, useState} from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {Button, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {toast} from "react-toastify";
import Box from "@mui/material/Box";
import {listaOrigenesYDestino} from "../Doctor/Arreglos";

export const Login = () =>{

    const [camilleros, setCamilleros] = useState([]);
    const [camillero, setCamillero] = useState();

    useEffect(()=>{
        axios.get("https://backcamilleros-production.up.railway.app/drivers")
            .then((res)=>{
                console.log(res)
                setCamilleros(res.data)
            }).catch((error)=>{
            console.log(error)
        })
    },[])

    const handleChangeDriver = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCamillero(event.target.value);
    };

    const submit = () => {
        if (camillero != ""){
            localStorage.setItem("camillero", camillero);
        }
        // sets the value of "message" to be "saved in browser storage"
    }

    return (
       camilleros &&
       <Box
           component="form"
           sx={{
               '& .MuiTextField-root': {m: 1, width: '100%',height:"80%"},
           }}
           noValidate
           autoComplete="off"
           style={{width:"50%",margin:"auto"}}
       >
           <div>
               <div style={{height: "150px", width:"650px", objectFit: "contain", overflow: "hidden"}}>
                   <img style={{maxHeight: "100%", maxWidth: "100%"}}
                       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfr0DxdBLL_fjeHd5NzRHXezx6SpWoRtQnbMsuNbmoMTLSt8M7vjNYPrmmAY2INnh4Sw&usqp=CAU'></img>
               </div>
               <TextField
                   id ="Camillero"
                   select
                   label="Camillero"
                   onChange={handleChangeDriver}
                   helperText="Seleccione su identidad"
               >
                   {camilleros.map((option) => (
                       <MenuItem key={option.name} value={option.name}>
                           {option.name}
                       </MenuItem>
                   ))}
               </TextField>

           </div>
           <div>

               <Button onClick={submit} >SUBMIT</Button>

           </div>
       </Box>
   );
}