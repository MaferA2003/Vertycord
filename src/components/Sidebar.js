import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar-responsive.css";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/modernas">Modernas</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/clasicas">Tradicionales</Link></li>
        <li><Link to="/pisos">Pisos</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
