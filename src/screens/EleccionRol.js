import { useNavigate } from "react-router-dom";

export const EleccionRol = () =>{
    const navigate=useNavigate()

    return (
      <div style={{width:"100vw",height:"100vh",display:"flex"}}>
        <div style={{height:"70%",width:"30%",margin:"auto",border:"2px solid black",borderRadius:"20px",cursor:"pointer",overflow:"hidden"}}
                 onClick={()=>navigate("/doctor")}>
            <img style={{height:"400px"}}
              src="https://img.freepik.com/vector-premium/doctor-jeringa-ilustracion-vector-estilo-dibujos-animados-plana_273525-687.jpg?w=2000"/>
               <h1 style={{marginTop:"100px"}}>DOCTOR</h1>
        </div>
        <div style={{height:"70%",width:"30%",margin:"auto",border:"2px solid black",borderRadius:"20px",cursor:"pointer",overflow:"hidden"}}
                 onClick={()=>navigate("/login")}>
            <img style={{height:"400px"}}
             src="https://us.123rf.com/450wm/classicvector/classicvector1905/classicvector190500058/130274516-paciente-en-la-ilustraci%C3%B3n-de-vector-plano-camilla-m%C3%A9dicos-de-emergencia-ayudando-al-hombre-inconsci.jpg?ver=6"/>
             <h1 style={{marginTop:"100px"}}>CAMILLERO</h1>
        </div>
      </div>
   );
}