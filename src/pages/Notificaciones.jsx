import React, { useEffect, useContext } from "react";
import Register from "../components/molecules/Register";
import IncomingWS from '../components/molecules/IncomingWS'
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


  useEffect(() => {
    const fetchAlerts = async () => {
      if (isLoggedIn) {
        try {
          const url = `http://localhost:3001/alerts/${userInfo.id}`;
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

  useEffect(() => {
    
    const socket = new WebSocket("localhost:4000");
    
    socket.addEventListener("message", (event) => {
      const newMessage = event.data; 
      setNewAlert(JSON.parse(newMessage)); 
    });

    return () => {
      socket.close();
    };
  }, [setNewAlert]); 
  // useEffect(() => {
  //   const socket = new WebSocket("wss://api.example.com");

  //   socket.addEventListener("message", (event) => {
  //     setMessage(event.data); // Update state with incoming messages from WebSocket
  //   });

  //   return () => {
  //     // Cleanup function to close the WebSocket on component unmount
  //     socket.close();
  //   };
  // }, []);
  return (
    <>
      <section className="wrapper">
        {Array.isArray(newAlert)?
        <>{/* <IncomingWS key={newAlert.id} alert={newAlert}/> */}</>:
        <>
        <h1>HELLO</h1>
        </>}
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
                {console.log(`🤨😶🤐|| 🥓 file: Notificaciones.jsx:86 🥓 Notificaciones 🥓 alert||`, alert)}
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


  

    