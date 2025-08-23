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
        <li><Link to="/product">Productos</Link></li>
        <li><Link to="/pages/modernas">Modernas</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/pages/clasicas">Tradicionales</Link></li>
        <li><Link to="/pages/pisos">Pisos</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
