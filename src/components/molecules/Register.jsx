import React from "react";

function Register(props) {
    const { id, type, description, severity, dateTime, affectedUserId } = props;

    const HandlerClickUpdate = async (e, id) => {
        console.log(`🤨😶🤐|| 🥓 file: Register.js:7 🥓 HandlerClickUpdate 🥓 id||`, id)
        e.preventDefault();
        // Logic for the update
      };
    
    return ( 
        <tr key={id}>
        <td>{id}</td>
        <td>{type}</td>
        <td>{description}</td>
        <td>{severity}</td>
        <td>{dateTime}</td>
        <td>{affectedUserId}</td>
        <button
          onClick={(e) => HandlerClickUpdate(e, id)}
          className="btn btn-outline-light btn-lg px-5"
        >
          Update
        </button>
      </tr>   
     );
}

export default Register;