import React from 'react';
import '../assets/style/moleculesCss/AcercaDeNosotros.css';
import ImagenDario from '../assets/img/Dario.png';
import ImagenUlises from '../assets/img/Ulises.png';
import ImagenMerlin from '../assets/img/Merlin.png';
import ImagenDarinel from '../assets/img/Darinel.png';
import Footer from "../components/atoms/Footer"

function AcercaDeNosotros() {
    return ( 
        <>
<div className='fondoAbout'>
    <div className="container py-5">
        <div className="row text-center text-white">
            <div className="col-lg-8 mx-auto">
                <h1 className="display-4">Software Team</h1>
                <p className="lead mb-0">Los mejores desarrolladores del 5º cuatrimestre de la UP Chiapas.</p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="cardEstiloAboutUs rounded shadow-sm py-5 px-4">
                <img src={ImagenDario} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">Darío Antonio Guitérrez Álvarez</h5><span className="small text-uppercase text-muted">Front-end</span>
                    <ul className="social mb-0 list-inline mt-3">
                        <li><a href="https://www.facebook.com/dario.gutierrezalvares/" className="">facebook</a></li>
                        <li><a href="https://www.instagram.com/nanio.getelementbyid/" className="">Instragram</a></li>
                        <li><a href="221245@ids.upchiapas.edu.mx" className="">Gmail</a></li>
                        <li><a href="https://www.linkedin.com/in/dario-antonio-gutierrez-alvarez-41353a225/" className="">linkedin</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="cardEstiloAboutUs rounded shadow-sm py-5 px-4"><img src={ImagenUlises} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">Ulises Galvez Miranda</h5><span className="small text-uppercase text-muted">Back-end</span>
                    <ul className="social mb-0 list-inline mt-3">
                        <li><a href="https://www.facebook.com/ulises.galvez.52" className="">Facebook</a></li>
                        <li><a href="https://www.instagram.com/iamuligami/" className="">Instragram</a></li>
                        <li><a href="https://mail.google.com/mail/u/0/#chat/dm/i_NqkUAAAAE" className="">Gmail</a></li>
                        <li><a href="https://www.linkedin.com/in/ulises-g%C3%A1lvez-miranda-29a40126b/" className="">linkedin</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="cardEstiloAboutUs rounded shadow-sm py-5 px-4"><img src={ImagenMerlin} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">José Ángel Ortega Merlin</h5><span className="small text-uppercase text-muted">Back-end</span>
                    <ul className="social mb-0 list-inline mt-3">
                        <li><a href="https://www.facebook.com/Zurdo.Angel.xMerlin" className="">Facebook</a></li>
                        <li><a href="https://www.instagram.com/angelxmxx/" className="">Instragram</a></li>
                        <li><a href="https://mail.google.com/mail/u/0/#chat/dm/vDVT1EAAAAE" className="">Gmail</a></li>
                        <li><a href="https://www.linkedin.com/in/jose-angel-ortega-merlin-a6153b225/" className="">linkedin</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
                <div className="cardEstiloAboutUs rounded shadow-sm py-5 px-4"><img src={ImagenDarinel} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">Christian Darinel Escobar Guillen</h5><span className="small text-uppercase text-muted">Front-end</span>
                    <ul className="social mb-0 list-inline mt-3">
                        <li><a href="https://www.facebook.com/darinel.escobar.716" className="">Facebook</a></li>
                        <li><a href="https://www.instagram.com/darinelescobar_5775/" className="">Instragram</a></li>
                        <li><a href="https://mail.google.com/mail/u/0/#chat/dm/sxEr1EAAAAE" className="">Gmail</a></li>
                        <li><a href="https://www.linkedin.com/in/darinel-escobar" className="">linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
        </>
     );
}

export default AcercaDeNosotros;