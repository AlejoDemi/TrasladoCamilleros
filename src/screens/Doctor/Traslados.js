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


        return (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Origen</TableCell>
                    <TableCell align="right">Destino</TableCell>
                    <TableCell align="right">Paciente</TableCell>
                    <TableCell align="right">Urgencia</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {solicitudes.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.areaFrom}
                      </TableCell>
                      <TableCell align="right">{row.areaTo}</TableCell>
                      <TableCell align="right">{row.patientId}</TableCell>
                      <TableCell align="right">{row.levelOfUrgency}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
}