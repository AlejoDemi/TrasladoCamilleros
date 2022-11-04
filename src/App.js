import logo from './logo.svg';
import './App.css';
import {Doctor} from "./screens/Doctor/Doctor";
import {Camillero} from "./screens/Camillero/Camillero";
import {TabsDoctor} from "./screens/Doctor/TabsDoctor";
import {CamilleroSinNotificaciones} from "./screens/Camillero/CamilleroSinNotificaciones";
import {ChequeoDePaciente} from "./screens/Camillero/ChequeoDePaciente";
import {Login} from "./screens/Camillero/Login";
import {TrasladoTerminado} from "./screens/Camillero/TrasladoTermiando";

function App() {
  return (
    <div className="App">
        <ChequeoDePaciente/>
    </div>
  );
}

export default App;
