import  {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CamilleroSinNotificaciones } from './CamilleroSinNotificaciones';
import { useNavigate } from 'react-router-dom';

export const Camillero = () => {

  const navigate=useNavigate()
   
    const[requests,setRequests]=useState([]);
    const [index,setIndex]=useState(0);

    useEffect(()=>{
        axios.get("https://backcamilleros-production.up.railway.app/requests")
        .then((res)=>{
            
            setRequests(res.data.filter(filterByStatus))
        }).catch((error)=>{
        console.log(error)
        })
    },[setTimeout(20000)])

   
    const filterByStatus=(request)=>{
        return request.status==="PENDING"
    }

    const urlByUrgency=(req)=>{
        if(req==="LOW")return "https://media.istockphoto.com/vectors/alert-green-octagonal-road-sign-vector-id917750822?k=20&m=917750822&s=170667a&w=0&h=mTfHkyD-wsV2wn82D41lc4v_hO8qtd0d9U-FtrRSL5Y="
        else if(req==="MEDIUM") return "https://cdn-icons-png.flaticon.com/512/6121/6121171.png"
        return "https://upload.wikimedia.org/wikipedia/commons/8/88/Red_triangle_alert_icon.png"
    }

    const acceptRequest =()=>{
      axios.put(`https://backcamilleros-production.up.railway.app/request/accept/${requests[index].id}`)
      .then(()=>{
          window.localStorage.setItem("requestId",requests[index].id)
          navigate("/reconocerPaciente")
          
      }).catch((error)=>{
      console.log(error)
      })
    }


    
    return (
        requests.length && index<requests.length?
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            SOLICITUD DE TRASLADO
          </Typography>
          <img style={{height:"200px",width:"200px"}} src={urlByUrgency(requests[index].levelOfUrgency)}></img>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {requests[index].patientId}
          </Typography>
          <Typography sx={{ mb: 3 }}  variant="body2">
            ORIGEN: {requests[index].areaFrom}
            <br />
            DESTINO: {requests[index].areaTo}
          </Typography>

          <Button variant="contained" color="success" onClick={acceptRequest}>
                ACEPTAR
            </Button>


            <Button variant="contained" color="error" onClick={()=>{setIndex(index+1)}}>
                RECHAZAR
            </Button>

        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
      :
      <CamilleroSinNotificaciones></CamilleroSinNotificaciones>
    );
}
