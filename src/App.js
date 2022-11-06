import logo from './logo.svg';
import './App.css';
import {Doctor} from "./screens/Doctor/Doctor";
import {Camillero} from "./screens/Camillero/Camillero";
import {TabsDoctor} from "./screens/Doctor/TabsDoctor";
import {CamilleroSinNotificaciones} from "./screens/Camillero/CamilleroSinNotificaciones";
import {ChequeoDePaciente} from "./screens/Camillero/ChequeoDePaciente";
import {Login} from "./screens/Camillero/Login";
import {TrasladoTerminado} from "./screens/Camillero/TrasladoTermiando";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { EleccionRol } from './screens/EleccionRol';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route
            path='/'
            element={<EleccionRol/>}/>
          <Route
            path='/login'
            element={<Login/>}/>
          
          <Route
            path='/camillero'
            element={<Camillero/>}/>

          <Route
            path='/reconocerPaciente'
            element={<ChequeoDePaciente/>}/>  

          <Route
            path='/trasladoTerminado'
            element={<TrasladoTerminado/>}/>    

          <Route
            path='/doctor'
            element={<TabsDoctor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
