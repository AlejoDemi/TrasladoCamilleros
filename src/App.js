import logo from './logo.svg';
import './App.css';
import {Doctor} from "./screens/Doctor/Doctor";
import {Camillero} from "./screens/Camillero/Camillero";
import {TabsDoctor} from "./screens/Doctor/TabsDoctor";
import {CamilleroSinNotificaciones} from "./screens/Camillero/CamilleroSinNotificaciones";
import {ChequeoDePaciente} from "./screens/Camillero/ChequeoDePaciente";
import {Login} from "./screens/Camillero/Login";

function App() {
  return (
    <div className="App">
        <Login/>
    </div>
  );
}

export default App;
