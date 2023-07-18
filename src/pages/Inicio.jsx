import React from 'react'
import ImagenSecurity from "../assets/img/security.webp"
import Footer from '../components/atoms/Footer'

function Inicio() {
    return ( 
        <>
    <section className="sectioncita section section-lg vh-100" id="home">
        <div className="bg-overlay"></div>
        <div className="display-table">
          <div className="display-table-cell">
            <div className="container"><div className="row">
              <div className="text-white text-center col-lg-8 offset-lg-2">
                <h1 className="home-title text-rotate">
                <div className="classC p-4">UP CHIAPAS</div></h1>
                  <p className="pt-3 home-desc">De los mejores proyectitos multidiciplinario.</p>
                  <p className="play-shadow  mt-4">
                  <a className="play-btn video-play-icon" href="/home-seven">
                    <i className="mdi mdi-play text-center"></i>
                  </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <h1 className="section-title text-center">Cyborg Detection</h1>
              <div className="section-title-border mt-3"></div>
                <p className="section-subtitle text-muted text-center pt-4 font-secondary">Nos adaptamos a tu seguridad</p>
            </div>
          </div>
          <div className="mt-4 row">
            <div className="mt-3 col-lg-4">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-diamond text-primary"></i>
                <h4 className="pt-3">Seguridad</h4>
                <p className="pt-3 text-muted">Tu seguridad es nuestra prioridad. Descubre nuestro sistema de detección de movimiento de vanguardia</p>
              </div>
            </div>
            <div className="mt-3 col-lg-4">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-display2 text-primary"></i>
                <h4 className="pt-3">Protección</h4>
                <p className="pt-3 text-muted">Protege lo que más quieres con nuestro sistema de detección de movimiento confiable.</p>
              </div>
            </div>
            <div className="mt-3 col-lg-4">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-piggy text-primary"></i>
                <h4 className="pt-3">Sin Límites</h4>
                <p className="pt-3 text-muted">Protección sin límites. Nuestro sistema de detección de movimiento cubre cada rincón de tu hogar o negocio.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 row">
            <div className="mt-3 col-lg-4">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-science text-primary"></i>
                <h4 className="pt-3">Precisión</h4>
                <p className="pt-3 text-muted">No te conformes con menos. Descubre nuestro sistema de detección de movimiento de precisión milimétrica.</p>
              </div>
            </div>
            <div className="mt-3 col-lg-4">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-news-paper text-primary"></i>
                <h4 className="pt-3">Detección</h4>
                <p className="pt-3 text-muted">Detección de movimiento sin fallas. Protege tu espacio con nuestro sistema de última generación.</p>
              </div>
            </div>
            <div className="mt-3 col-lg-4">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-plane text-primary"></i>
                <h4 className="pt-3">24/7</h4>
                <p className="pt-3 text-muted">No más preocupaciones. Nuestro sistema de detección de movimiento te brinda tranquilidad las 24 horas del día.</p><br/><br/><br/><br/><br/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section p-5 bg-light" id="features">
        <div className="container">
          <div className="vertical-content row">
            <div className="col-lg-5">
              <div className="textito features-box"><br/>
                <h3>Confianza &amp; Seguridad</h3>
                <p className="text-muted p-2 web-desc">Seguridad confiable en cada rincón</p>
                <ul className="text-muted list-unstyled mt-4 features-item-list">
                  <li className="">Nuestra empresa cuenta con un equipo de expertos en seguridad altamente capacitados que monitorean constantemente el sistema de vigilancia para detectar cualquier actividad sospechosa.</li><br/>
                  <li className="">Implementamos medidas de seguridad adicionales, como la encriptación de datos, para proteger la privacidad y la confidencialidad de la información capturada por el sistema de vigilancia.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="features-img features-right text-end">
                <img src={ImagenSecurity} loading='lazy' alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
        </>
     );
}

export default Inicio;