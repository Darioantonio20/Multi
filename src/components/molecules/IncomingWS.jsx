import React from "react";

function IncomingWS(props) {
  const { id, type, description, severity, dateTime, affectedUserId } = props.alert;

  const HandlerClickUpdate = async (e, id) => {
    e.preventDefault();
   alert("Call the police succesfully done")
   //Probably we can change a conte in here a paint all of the tab
  };

  return (
    <>
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
            <tr key={id}>
                <td>{id}</td>
                <td>{type}</td>
                <td>{description}</td>
                <td>{severity}</td>
                <td>{dateTime}</td>
                <td>{affectedUserId}</td>
                <td>
                    <button onClick={(e) => HandlerClickUpdate(e, id)} className="btn btn-outline-light btn-lg px-5">
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
