import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useRef } from "react";
import UserContext from "../contexts/UserContext";
import UserInfoContext from "../contexts/UserInfoContext";
import AlertDataContext from "../contexts/AlertDataContext";
import "../assets/style/moleculesCss/InicioDeSesion.css";

function InicioDeSesion() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { setUserInfo } = useContext(UserInfoContext);
  const { setAlertData } = useContext(AlertDataContext);
  const navigate = useNavigate();
  const formDataL = useRef();

  const HandlerClickLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(formDataL.current);
    const mail = formData.get("mail");
    const password = formData.get("password");

    try {
      const url = `http://localhost:3002/users/${mail}/${password}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("Network response was not ok.");

      const data = await response.json();
      data.status === "success" ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setUserInfo(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isLoggedIn ? navigate("/Notificaciones") : navigate("/InicioDeSesion");
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