import React from "react";
import { Link } from "react-router-dom"; // Importa Link de React Router
import "./Product.css";
import "./Product-responsive.css";

const Product = () => {
  return (
    <div className="product-page">
      {/* Sección de Imágenes en Línea */}
      <div className="product-images">
        <div className="product-item">
          <Link to="/pages/modernas">
            <img src="/modernas.jpg" alt="Cortinas Modernas" />
            <h3>Cortinas Modernas</h3>
          </Link>
        </div>
        <div className="product-item">
          <Link to="/pages/clasicas">
            <img src="/tradicionales.jpg" alt="Cortinas Clásicas" />
            <h3>Cortinas Tradicionales</h3>
          </Link>
        </div>
        <div className="product-item">
          <Link to="/pages/pisos">
            <img src="/piso.jpg" alt="Pisos Laminados" />
            <h3>Pisos Laminados</h3>
          </Link>
        </div>
      </div>
      <div className="banner">
        <h2>¡Descubre Nuestros Modelos!</h2>
      </div>

      {/* Contenedor General de Descripciones */}
      <div className="product-description-container">
        {/* Cortinas Modernas */}
        <div id="cortinas-modernas">
          <div className="product-title">Cortinas Modernas</div>
          <div className="product-description">
            <ul>
              <li>Romanas en Screen</li>
              <li>Zebras / Shades</li>
              <li>Paneles Japoneses</li>
              <li>Persianas verticales y horizontales</li>
              <li>Hospitalarias</li>
              <li>Roller Screen y Blackout</li>
              <li>Velluz</li>
              <li>Divergence</li>
              <li>Claraboya</li>
            </ul>
          </div>
        </div>

        {/* Cortinas Clásicas */}
        <div id="cortinas-clasicas">
          <div className="product-title">Cortinas Tradicionales</div>
          <div className="product-description">
            <ul>
              <li>Visillos</li>
              <li>Pesadas</li>
              <li>Blackout</li>
              <li>Perfect Wave Shades </li>
              <li>Cenefas</li>
              <li>Tubos decorativos</li>
            </ul>
          </div>
        </div>

        {/* Pisos Laminados */}
        <div id="pisos-laminados">
          <div className="product-title">Pisos Laminados</div>
          <div className="product-description">
            <ul>
              <li>Flotante</li>
              <li>Bambú</li>
              <li>Alfombras de pared a pared</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
