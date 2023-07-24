import React, { useEffect, useContext } from "react";
import Register from "../components/molecules/Register";
import IncomingWS from '../components/molecules/IncomingWS'
import io  from 'socket.io-client'
import "../assets/style/moleculesCss/Notificaciones.css";
import UserContext from "../contexts/UserContext";
import NewAlertContext from "../contexts/NewAlertContext";
import UserInfoContext from "../contexts/UserInfoContext";
import AlertDataContext from "../contexts/AlertDataContext";

function Notificaciones() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const {newAlert, setNewAlert} = useContext(NewAlertContext);
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const { alertData, setAlertData } = useContext(AlertDataContext);
    const socket = io('http://18.233.107.70:4000');


  useEffect(() => {
    const fetchAlerts = async () => {
      if (isLoggedIn) {
        try {
          const url = `http://54.161.75.228:3000/alerts/${userInfo.id}`;
          const response = await fetch(url);

      if (!response.ok) throw new Error("Failed to fetch data");

          const data = await response.json();
          setAlertData(data.data.alert);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchAlerts();
  }, [isLoggedIn]);

  useEffect (() => {
    socket.on('alert', alert => setNewAlert(JSON.parse(alert)));
    return ( ) => {
    socket.off('alert', alert => {
      console.log(alert)
    })
    }
}, [isLoggedIn])
  
  
  return (
    <>
      <section className="wrapper">
        {newAlert && (newAlert.affectedUserId == userInfo.id)?
        <> 
        {/* Hacer un ejemplo de alarma si es posible o algo que de a conocer que hay 
        una nueva alarma
        */}
        <h1>Hemos detectado un nuevo movimiento</h1>
        <h2>Por favor has algo</h2>
        <IncomingWS key={newAlert.id} alert={newAlert}/> </>:
        <>
        <h1>HELLO</h1>
        </>
        }
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Identificador</th>
              <th scope="col">Tipo de alerta</th>
              <th scope="col">Descripción</th>
              <th scope="col">Severidad</th>
              <th scope="col">Fecha</th>
              <th scope="col">Usuarios notificados</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(alertData) &&
              alertData
                .filter((alert) => parseInt(alert.status) !== 1)
                .map((alert) => 
                <>
                <Register key={alert.id} alert={alert} />
                </>
                )}
          </tbody>  
        </table>
      </section>
    </>
  );
}

export default Notificaciones;


  

    