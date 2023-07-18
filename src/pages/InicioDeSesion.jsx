import { Link,useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState, useRef } from "react";
import UserContext from "../contexts/UserContext";
import UserInfoContext from "../contexts/UserInfoContext";
import AlertDataContext from "../contexts/AlertDataContext";
import "../assets/style/moleculesCss/InicioDeSesion.css";

function InicioDeSesion() {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const { alertData, setAlertData } = useContext(AlertDataContext);
    const navigate = useNavigate();
    const formDataL = useRef();
  
  
  
    const HandlerClickLogin = async (e) => {
      e.preventDefault();
    //  setIsLoggedIn(true); 
    //  navigate("/Notificaciones")
  
      const formData = new FormData(formDataL.current);
      const mail = formData.get("mail");
      const password = formData.get("password");
      console.log(`🤨😶🤐|| 🥓 file: InicioDeSesion.js:25 🥓 HandlerClickLogin 🥓 password||`, password)
  
      const url = `http://localhost:3002/users/${mail}/${password}`;
      
      fetch(url)
      .then((response) => {
        console.log(`🤨😶🤐|| 🥓 file: InicioDeSesion.js:31 🥓 .then 🥓 response||`, response)
        if (response.ok) {
          return response.json();
          setIsLoggedIn(response.ok);
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log(`🤨😶🤐|| 🥓 file: InicioDeSesion.js:38 🥓 .then 🥓 data||`, data)
        if(data.status=="success")
        setIsLoggedIn(true);
        setUserInfo(data.data);
        // isLoggedIn?navigate("/Notificaciones"):navigate("/InicioDeSesion")
        
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred during login.");
      });
      // console.log(`🤨😶🤐|| 🥓 file: InicioDeSesion.jsx:50 🥓 HandlerClickLogin 🥓 isLoggedIn||`, isLoggedIn)

    };
  
    
    
    useEffect(() => {
      setTimeout(() => {
        
        console.log(`°¬0`)
        if(isLoggedIn){
          navigate("/Notificaciones");
          console.log(`🤨😶🤐|| 🥓 file: InicioDeSesion.jsx:61 🥓 useEffect 🥓 Notificaciones||`)
        }else{
          navigate("/InicioDeSesion");
          console.log(`🤨😶🤐|| 🥓 file: InicioDeSesion.jsx:64 🥓 useEffect 🥓 InicioDeSesion||`)
        }
        
      }, 1000);
    }, [isLoggedIn]);

    return ( 
        <>
            <section className="imagenDeFondito vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="estilo1 text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Inicio De Sesión
                    </h2>
                    <p className="text-white-50 mb-5">
                      Ingrese su correo y contraseña
                    </p>
                    <form ref={formDataL}> {/* Form element */}
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="mail"
                          className="form-control form-control-lg"
                          name="mail"
                          autoComplete="current-mail"
                        />
                        <label className="form-label">Correo Eléctronico</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          name="password"
                          autoComplete="current-password"
                        />
                        <label className="form-label">Contraseña</label>
                      </div>
                    </form>
                    <br></br>
                    {/* Rest of your code */}
                    <button
                      onClick={HandlerClickLogin}
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Validar
                    </button>
                    <p className="p-5 mb-0">
                      No tienes cuenta?{" "}
                      <Link to="/Registro" className="text-white-50 fw-bold">
                        Crear cuenta
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
     );
}

export default InicioDeSesion;