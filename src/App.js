import logo from './logo.svg';
import './App.css';
import {Doctor} from "./screens/Doctor/Doctor";
import {Camillero} from "./screens/Camillero/Camillero";
import {TabsDoctor} from "./screens/Doctor/TabsDoctor";
import {CamilleroSinNotificaciones} from "./screens/Camillero/CamilleroSinNotificaciones";
import {ChequeoDePaciente} from "./screens/Camillero/ChequeoDePaciente";

function App() {
  return (
    <div className="App">
        <TabsDoctor/>

    </div>
  );
}

export default App;
