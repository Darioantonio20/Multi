import "../assets/style/moleculesCss/Registro.css";
import { Link } from 'react-router-dom';

function Registro() {
    return (
        <>
    <section className="imagenDeFondito vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="estilito text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Crear Una Cuenta Nueva</h2>
                  <p className="text-white-50 mb-5">Rellene los campos correctamente!</p>
                  <div className="form-outline form-white mb-4">
                    <input type="text" id="typeEmailX" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmailX">Nombre Completo</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmailX">Correo Eléctronico</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
                  </div>
                  <br/>
                  <button className="btn btn-outline-light btn-lg px-5" type="submit">Validar</button>
                  <br/><br/>
                  <p className="mb-0"><Link to="/InicioDeSesion" className="text-white-50 fw-bold">Regresar</Link></p>
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

export default Registro;