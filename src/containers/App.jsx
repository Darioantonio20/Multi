import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useState } from "react";

import Navbar from '../components/molecules/Navbar';
import Inicio from '../pages/Inicio';
import InicioDeSesion from '../pages/InicioDeSesion';
import AcercaDeNosotros from '../pages/AcercaDeNosotros';
import Notificaciones from '../pages/Notificaciones';
import Registro from '../pages/Registro';

import ProtectedParentRoute from './ProtectedParentRoute'; 

// Contextos
import UserContext from '../contexts/UserContext';
import UserInfoContext from '../contexts/UserInfoContext';
import NewAlertContext from '../contexts/NewAlertContext';
import AlertDataContext from '../contexts/AlertDataContext';

import '../assets/style/moleculesCss/App.css';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [alertData, setAlertData] = useState([]);
  const [newAlert, setNewAlert] = useState([]);

    return ( 
        <>
        <BrowserRouter>
          <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
              <NewAlertContext.Provider value={{ newAlert, setNewAlert }}>
              <AlertDataContext.Provider value={{ alertData, setAlertData }}>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Inicio />} />
                  <Route path='/Registro' element={<Registro />} />
                  <Route path='/InicioDeSesion' element={<InicioDeSesion />} />
                  <Route path='/AcercaDeNosotros' element={<AcercaDeNosotros />} />
                  <Route element={<ProtectedParentRoute isLoggedIn={isLoggedIn} />}>
                    <Route path='/Notificaciones' element={<Notificaciones />} />
                  </Route>
                </Routes>
              </AlertDataContext.Provider>
              </NewAlertContext.Provider>
            </UserInfoContext.Provider>
          </UserContext.Provider>
        </BrowserRouter>
      </>
     );
}

export default App;