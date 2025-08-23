import React, { useState } from "react";
import "./Clasicas.css";
import "./Clasicas-responsive.css";

const clasicasData = [
  {
    title: "Visillos",
    description: "Cortinas ligeras y translúcidas que permiten el paso de la luz manteniendo un nivel básico de privacidad..",
    features: [
      "Filtran la luz natural.",
      "Aportan elegancia y ligereza.",
      "Fáciles de combinar con otras cortinas.",
      "Varían según la trama del tejido.",
    
    ],
    videos: ["/visillos1.mp4"],
  },
  {
    title: "Pesadas",
    description: "Cortinas gruesas que ofrecen privacidad, control de luz y confort adicional.",
    features: [
      "Bloqueo eficiente de la luz.",
      "Aislamiento térmico y acústico.",
      "Gran variedad de telas y diseños.",
      "Ideales para dormitorios y salas.",
    ],
    videos: ["/pesadas1.mp4"],
  },
  {
    title: "Blackout",
    description: "Cortinas diseñadas para oscurecer habitaciones, reduciendo hasta casi por completo la entrada de luz exterior.",
    features: [
      "Bloquean entre 90% y 100% de la luz exterior.",
      "Aislamiento térmico.",
      "Reducción de ruido exterior.",
      "Durabilidad y fácil mantenimiento.",
    ],
    videos: ["/blackout1.mp4"],
  },
  {
    title: "Perfect Wave Shades",
    description: "Cortinas con efecto de onda que equilibran la entrada de luz y la privacidad, aportando diseño elegante y versátil.",
    features: [
      "Control moderado de la luz.",
      "Diseño elegante y versátil.",
      "Amplia variedad de colores y estilos.",
      "Combinables con visillos o blackout.",
    ],
    videos: ["/onda1.mp4"],
  },
  {
    title: "Cenefas",
    description: "Elementos decorativos que realzan la estética de cortinas y ventanas..",
    features: [
      "Aporta un toque decorativo.",
      "Variedad de diseños y estilos.",
      "Complementa cualquier tipo de cortina.",
      "Fácil instalación.",
    ],
    videos: ["/cenefa1.mp4"],
  },
  {
    title: "Tubos decorativos",
    description: "Barras y accesorios que combinan funcionalidad y diseño para instalar cortinas con elegancia.",
    features: [
      "Diseños elegantes y modernos.",
      "Materiales resistentes y duraderos.",
      "Variedad de acabados y colores.",
      "Compatible con diferentes tipos de cortinas.",
    ],
    videos: ["/tubo1.mp4"],
  },
];

const Clasicas = () => {
  const [openFeatures, setOpenFeatures] = useState({});

  const toggleFeatures = (index) => {
    setOpenFeatures((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="clasicas-page">
      <h2 className="tradicionales-title">Cortinas tradicionales</h2>
      <p className="clasicas-description">
        Descubre nuestra exclusiva colección, donde la elegancia atemporal se une con la calidad y el confort.
      </p>
      <div className="linea-divisoria"></div>

      {clasicasData.map((item, index) => (
        <section key={index} className="clasicas-section">
          <h2>{item.title}</h2>

          {/* Video(s) dinámico(s) por sección */}
          {item.videos.map((videoSrc, idx) => (
            <video
              key={idx}
              width="100%"
              height="auto"
              autoPlay
              muted
              playsInline
              style={{ borderRadius: "10px", background: "#000", marginBottom: "10px" }}
            >
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          ))}

          <p className="clasicas-description">{item.description}</p>

          <button className="features-button" onClick={() => toggleFeatures(index)}>
            {openFeatures[index] ? "Ocultar detalles" : "Conoce más"}
          </button>

          {openFeatures[index] && (
            <ul className="clasicas-features">
              {item.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
};

export default Clasicas;
