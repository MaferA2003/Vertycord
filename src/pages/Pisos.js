import React, { useState } from "react";
import "./Pisos.css";
import "./Pisos-responsive.css"

const pisosData = [
  {
    title: "Piso Flotante",
    description: "Piso flotante moderno y funcional, ideal para cualquier espacio.",
    features: [
      "Diferentes medidas, texturas y colores.",
      "Resistente al desgaste",
      "No se decolora con la luz solar",
      "Fácil mantenimiento.",
    ],
    image: ["/flotante.png"],
  },
  {
    title: "Bambú",
    description: "Piso ecológico y elegante, fabricado con materiales de alta calidad.",
    features: [
      "Sostenible y renovable.",
      "Brinda elegancia al entorno.",
      "Alternativa innovadora.",
      "Fácil mantenimiento.",
    ],
    image: ["/bamboo.png"],
  },
  {
    title: "Alfombras de pared a pared",
    description: "Cubre toda la habitación con una alfombra suave y cómoda.",
    features: [
      "Calidez a los ambientes y confort.",
      "Delimita diferentes espacios.",
      "Variedad de colores y texturas.",
      "Fácil de limpiar.",
    ],
    image: ["/alfombra.png"],
  },
];

const Pisos = () => {
  const [openFeatures, setOpenFeatures] = useState({});

  const toggleFeatures = (index) => {
    setOpenFeatures((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="pisos-page">
      <h2 className="pisos-title">Pisos</h2>
      <p className="pisos-description">
        Descubre nuestra selección de pisos que combinan diseño, durabilidad y funcionalidad.
      </p>
      <div className="linea-divisoria"></div> {/* Esta es la línea que estás buscando */}
      {pisosData.map((item, index) => (
        <div key={index} className="pisos-section">
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
          <p className="pisos-description">{item.description}</p>

          <button className="features-button" onClick={() => toggleFeatures(index)}>
            {openFeatures[index] ? "Ocultar detalles" : "Conoce más"}
          </button>

          {openFeatures[index] && (
            <ul className="pisos-features">
              {item.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pisos;
