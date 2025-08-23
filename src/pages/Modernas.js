import React, { useState } from "react";
import "./Modernas.css";
import "./Modernas-responsive.css";

const modernasData = [
  {
    title: "Romanas en Screen",
    description:
      "Tienen un diseño en pliegues que brinda a tus espacios un toque clásico y elegante.",
    features: [
      "Permite graduar la luz solar.",
      "Brinda privacidad.",
      "Fácil de limpiar y lavar.",
      "Larga durabilidad.",
    ],
    image: ["/romanas1.png"],
  },
  {
    title: "Zebras / Shades",
    description:
      "Cortinas modernas con diseño de franjas alternas que permiten regular la entrada de luz con estilo.",
    features: [
      "Variedad de colores.",
      "Impide la luz solar de verano.",
      "Privacidad completa.",
      "Mantiene las habitaciones frescas durante el día.",
    ],
    image: ["/zebras1.png"],
  },
  {
    title: "Panel Japonés",
    description:
      "Ideales para cubrir grandes ventanales o dividir ambientes, aportando estilo y funcionalidad.",
    features: [
      "Decoración moderna.",
      "Estética atractiva.",
      "Deslizamiento horizontal.",
    ],
    image: ["/panel1.png"],
  },
  {
    title: "Persianas verticales y horizontales",
    description:
      "Solución práctica que permite controlar la entrada de luz y mantener la privacidad en tus espacios.",
    features: [
      "Diferentes tipos de persianas.",
      "Distintos sistemas y materiales.",
      "Fácil de limpiar.",
      "Fácil manejo.",
    ],
    image: ["/persianas1.png"],
  },
  {
    title: "Hospitalarias",
    description:
      "Diseñadas para dividir espacios y dar privacidad, con telas especiales para áreas hospitalarias que cumplen los estándares de calidad",
    features: [
      "Material antibacteriano y anti-fluidos.",
      "Fácil limpieza y mantenimiento.",
      "Cierre hermético para mayor privacidad.",
      "Colores neutros y funcionales.",
    ],
    image: ["/hospitalarias1.png"],
  },
  {
    title: "Roller Screen y Blackout",
    description:
      "Perfectas para bloquear la luz o regularla con estilo y eficiencia.",
    features: [
      "Bloqueo total de luz (blackout).",
      "Control de luz sin perder visibilidad (screen).",
      "Variedad de colores y texturas.",
      "Fácil mantenimiento.",
    ],
    image: ["/roller1.png"],
  },
  {
    title: "Velux",
    description:
      "Cortinas elegantes que aportan suavidad, confort y un diseño moderno.",
    features: [
      "Tejido translúcido de alta calidad.",
      "Variedad de colores modernos.",
      "Control de luz.",
      "Durabilidad garantizada.",
    ],
    image: ["/velluz1.png"],
  },
  {
    title: "Divergence",
    description:
      "Diseño innovador que juega con la luz y las sombras de manera única.",
    features: [
      "Efectos de iluminación personalizables.",
      "Materiales modernos y resistentes.",
      "Diferentes niveles de opacidad.",
      "Aporta estilo y modernidad.",
    ],
    image: ["/divergence1.png"],
  },
  {
    title: "Claraboya",
    description:
      "Solución ideal para techos y tragaluces, que regula la luz de manera eficiente y segura.",
    features: [
      "Materiales resistentes al calor.",
      "Opciones manuales o motorizadas.",
      "Iluminación natural.",
      "Protección UV con ventilación.",
    ],
    image: ["/claraboya1.png"],
  },
];

const Modernas = () => {
  const [openFeatures, setOpenFeatures] = useState({});

  const toggleFeatures = (index) => {
    setOpenFeatures((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="modernas-page">
      {/* Título y descripción de la sección */}
      <h2 className="modernas-title">Cortinas Modernas</h2>
      <p className="modernas-description">
        Explora nuestra selección de cortinas modernas que combinan diseño innovador y funcionalidad.
      </p>
      <div className="linea-divisoria"></div> {/* Esta es la línea que estás buscando */}
      {modernasData.map((item, index) => (
        <div key={index} className="modernas-section">
          <h3>{item.title}</h3>
          {/* Mostrar una sola imagen aquí */}
          <img src={item.image} alt={item.title} />
          <p className="modernas-description">{item.description}</p>

          <button className="features-button" onClick={() => toggleFeatures(index)}>
            {openFeatures[index] ? "Ocultar detalles" : "Conoce más"}
          </button>

          {openFeatures[index] && (
            <ul className="modernas-features">
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

export default Modernas;