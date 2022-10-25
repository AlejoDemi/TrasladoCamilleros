import logo from './logo.svg';
import './App.css';
import {Doctor} from "./screens/Doctor/Doctor";
import {Camillero} from "./screens/Camillero/Camillero";
import {TabsDoctor} from "./screens/Doctor/TabsDoctor";
import {CamilleroSinNotificaciones} from "./screens/Camillero/CamilleroSinNotificaciones";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/*"} element={<TabsDoctor></TabsDoctor>}/>
          <Route path={"/camillero"} element={<Camillero></Camillero>}/>
        </Routes>

      </BrowserRouter>
        

    </div>
  );
}

export default App;
