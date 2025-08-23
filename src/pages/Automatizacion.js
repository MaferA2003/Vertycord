import React from "react";
import "./Automatizacion.css";

const Automatizacion = () => {
  return (
    <div className="automatizacion-container">
      <div className="automatizacion-image">
        <img src="/modelo.png" alt="Automatización de cortinas" />
      </div>
      <div className="automatizacion-text">
        <p>
          Las cortinas al estar constantemente expuestas al sol, los textiles de las mismas pueden cambiar de color y aspecto, 
          es por ello que necesitan un mantenimiento el cual es diferente para cada tipo de cortina.
        </p>
        <p>
          Por esto contamos con un servicio de limpieza el cual no daña, ni pone en peligro la textura de la tela.
        </p>
        <p>
          Las cortinas motorizadas se encuentran equipadas con un motor que les permite ser operadas por medio de un control remoto 
          el cual programa los movimientos de las cortinas en función de la luz, en cualquier momento del día. 
          Esto brindará comodidad y confort, además de elegancia y exclusividad en el hogar.
        </p>
      </div>
    </div>
  );
};

export default Automatizacion;
