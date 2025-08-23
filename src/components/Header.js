import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import "./Header-responsive.css";

const Header = () => {
  return (
    <>
      <header className="header">
        {/* Sección Izquierda: Íconos de Redes y Navegación */}
        <div className="header-left">
          <a href="https://www.facebook.com/Vertycord" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/vertycord__decoraciones/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.tiktok.com/@vertycord?_t=ZM-8vMyIkFi1ah&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="icon" />
          </a>
          <nav>
            <ul>
              <li><Link to="/product">Productos</Link></li> 
              <li><Link to="/servicios">Servicios</Link></li>  
            </ul>
          </nav>
        </div>

        {/* Sección Central: Logo y Texto */}
        <div className="header-center">
          <div className="logo-container">
            <img src="/logo.png" alt="Logo" className="logo" />
            <p className="logo-text">Vertycord</p>
          </div>
        </div>

        {/* Sección Derecha: Botón de llamada */}
        <div className="header-right">
          <a href="tel:+593992876120" className="call-button">
            <FaPhone /> Llámanos Ahora: +593 99 287 6120
          </a>
        </div>
      </header>

      {/* Botón flotante de WhatsApp */}
      <a href="https://wa.me/593992876120" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Header;
