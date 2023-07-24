import React, {  useContext } from "react";

import UserContext from "../../contexts/UserContext";
import NewAlertContext from "../../contexts/NewAlertContext";

function IncomingWS(props) {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const {  description, severity, affectedUserId } = props.alert;
  const {newAlert, setNewAlert} = useContext(NewAlertContext);

  const HandlerClickUpdate = async (e, id) => {
    e.preventDefault();
   alert("Call the police succesfully done")
   isLoggedIn(true);
   alert("We'll update your infomation now")
   //Probably we can change a conte in here a paint all of the tab
  };

  return (
    <>
     <table className="table">
          <thead>
            <tr>
             {/*  <th scope="col">Identificador</th>
              <th scope="col">Tipo de alerta</th> */}
              <th scope="col">Descripción</th>
              <th scope="col">Severidad</th>
              {/* <th scope="col">Fecha</th> */}
              <th scope="col">Usuarios notificados</th>
            </tr>
          </thead>
          <tbody>
            <tr key={affectedUserId}>
                {/* <td>{id}</td>
                <td>{type}</td> */}
                <td>{description}</td>
                <td>{severity}</td>
                {/* <td>{dateTime}</td> */}
                <td>{affectedUserId}</td>
                <td>
                    <button onClick={(e) => HandlerClickUpdate(e, affectedUserId)} className="btn btn-outline-light btn-lg px-5">
                    LOOK
                    </button>
                </td>
            </tr>
          </tbody>
        </table>
    </>
  );
}

export default IncomingWS;
