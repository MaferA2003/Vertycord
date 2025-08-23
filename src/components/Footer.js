import React from "react";
import "./Footer.css";
import "./Footer-responsive.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Primer Footer con Mapa, Contacto y Horario */}
      <footer className="footer">
        <div className="footer-container">

          {/* Ubicación con Google Maps */}
          <div className="footer-section map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31814.05390682354!2d-78.48290235723756!3d-0.12189516013266106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5896fb257b8a7%3A0xd7c6ad682dab91ad!2sAv.%20Real%20Audiencia%20N60-40%2C%20Quito%20170144!5e0!3m2!1ses-419!2sec!4v1709823643815"
              width="400"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Sección de contacto */}
          <div className="footer-section">
            <h3>Contacto</h3>
            <p><FaMapMarkerAlt /> Av. Real Audiencia N60-40, Quito</p>
            <p><FaPhone /> (+593) 992 876 120</p>
            <p><FaPhone /> (02) 346 5440</p>
            <p><FaEnvelope /> vertycorddecoraciones@hotmail.es</p>
          </div>

          {/* Horario de atención */}
          <div className="footer-section">
            <h3>Horario de Atención</h3>
            <p><FaClock /> Lunes a Viernes: 09:00 - 18:00</p>
            <p><FaClock /> Sábado: 09:00 - 16:00</p>
            <p><FaClock /> Domingo: Cerrado</p>
          </div>

        </div>
      </footer>

      {/* Segundo Footer con Tarjetas de Pago */}
      <footer className="footer secondary-footer">
        <div className="footer-container">
          <div className="footer-section aceptamos">
            <h3>¡Aceptamos todo tipo de Tarjetas!</h3>
            <img src="/tarjetas.png" alt="Tarjetas aceptadas" className="tarjetas-img" />
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
