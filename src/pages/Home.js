import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import "./Home-responsive.css";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowAbout(true), 500);
  }, []);

  return (
    <div className="home-container">
      {/* Carrusel de imágenes */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="carousel-container"
      >
        <div className="carousel-slide">
          <img src="portada13.png" alt="Cortina 1" />
          <div className="carousel-caption">
            <p>Confía en Vertycord y dale a tu hogar el estilo y confort que merece.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="portada11.png" alt="Cortina 2" />
          <div className="carousel-caption">
            <p>Confía en Vertycord y dale a tu hogar el estilo y confort que merece.</p>
          </div>
        </div>
         <div className="carousel-slide">
          <img src="portada2.png" alt="Cortina 1" />
          <div className="carousel-caption">
            <p>Confía en Vertycord y dale a tu hogar el estilo y confort que merece.</p>
          </div>
        </div>
          <div className="carousel-slide">
          <img src="portada1.png" alt="Cortina 1" />
          <div className="carousel-caption">
            <p>Confía en Vertycord y dale a tu hogar el estilo y confort que merece.</p>
          </div>
        </div>
      </Carousel>

      {/* Sección Sobre Nosotros */}
      <div id="sobre-nosotros" className={`about-container ${showAbout ? "visible" : ""}`}>
        <div className="about-header">
          <h2 className="title-transition">¿Quiénes somos?</h2>
          <h2 className="subtitle-transition">Sobre Nosotros</h2>
        </div>

        <div className="about-content">
          {/* Texto de la sección */}
          <div className="about-text">
            <p>
              En <strong>Vertycord</strong>, llevamos más de <strong>20 años</strong> decorando y automatizando hogares con
              una exclusiva selección de productos importados de las mejores marcas,
              garantizando calidad y durabilidad.
            </p>
            <p>
              Nuestra experiencia nos permite comprender las necesidades de cada cliente,
              ofreciendo soluciones personalizadas y asesoramiento experto para encontrar la mejor opción para cada espacio.
            </p>
            <ul className="about-list">
              <li>
                <span className="check-icon">✔</span> Alta calidad en cada producto.
              </li>

              <li>
                <span className="check-icon">✔</span> Precios competitivos que se adaptan a tu presupuesto.
              </li>

              <li>
                <span className="check-icon">✔</span> Entregas rápidas para que disfrutes tu compra sin esperas.
              </li>

            </ul>
          </div>

          {/* Imagen de la empresa */}
          <div className="about-image">
            <img src="nosotros.jpg" alt="Nuestra empresa" className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
