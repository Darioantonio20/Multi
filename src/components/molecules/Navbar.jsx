import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";

import UserContext from '../../contexts/UserContext';

function Navbar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  
    return ( 
        <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand text-primary" href="#">Cyborg Detection</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to='/AcercaDeNosotros'>Acerca de nosotros</Link>
                    </li>
                    
                    {isLoggedIn==false ? 
                    (
                    <li className="nav-item">
                        <Link className="nav-link" to='/InicioDeSesion'>Inicio de sesión</Link>
                    </li>
                    ):(
                    <li className="nav-item">
                        <Link className="nav-link" to='/Notificaciones'>Notificaciones</Link>
                    </li>
                    )}
                    
                </ul>
            </div>
        </div>
    </nav>
    </>
     );
}

export default Navbar;