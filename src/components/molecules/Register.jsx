import UserContext from "../../contexts/UserContext";
import React, {  useContext } from "react";

function Register(props) {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const { id, type, status,  description, severity, dateTime, affectedUserId } = props.alert;
  const HandlerClickUpdate = async (e, id) => {
    e.preventDefault();
    console.log(`🤨😶🤐|| 🥓 file: Register.js:7 🥓 HandlerClickUpdate 🥓 id||`, id);

    // Data to send in the POST request
    const Update = {
      id: id,
    };

    try {
      const url = `http://54.161.75.228:3000/alerts`; 
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Update),
      };

      const response = await fetch(url, options);

      if (!response.ok) throw new Error("Failed to update data");
      setIsLoggedIn(isLoggedIn);
      const result = await response.json();
      console.log("Updated data:", result);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{status}</td>
      <td>{description}</td>
      <td>{severity}</td>
      <td>{dateTime}</td>
      <td>{affectedUserId}</td>
      <td>
        <button onClick={(e) => HandlerClickUpdate(e, id)} >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Register;
