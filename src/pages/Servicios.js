import './Servicios.css';
import './Servicios-responsive.css';

const servicios = [
  {
    titulo: 'Lavado de Muebles',
    descripcion: 'Limpieza profunda y detallada de muebles tapizados, eliminando manchas y olores.',
    emoji: '🛋️'
  },
  {
    titulo: 'Lavado de Alfombras',
    descripcion: 'Servicio profesional de lavado y desinfección de alfombras en seco o con vapor.',
    emoji: '🧼'
  },
  {
    titulo: 'Cambio de Telas Zebra, Screen y Blackout',
    descripcion: 'Renovamos tus cortinas con telas modernas y elegantes según tu necesidad.',
    emoji: '🧵'
  },
  {
    titulo: 'Arreglo de Cortinas',
    descripcion: 'Reparación y ajuste de cortinas clásicas y modernas para que luzcan como nuevas.',
    emoji: '✂️'
  },
  {
    titulo: 'Asesoría en Diseño y Decoración',
    descripcion: 'Te ayudamos a elegir el estilo, colores y telas más adecuados para tu espacio.',
    emoji: '🏡'
  },
  {
    titulo: 'Integración con Smart Home',
    descripcion: 'Controla tus cortinas inteligentes desde tu móvil o asistente de voz.',
    emoji: '🔌'
  },
  {
    titulo: 'Instalación de Tubos y Rieles',
    descripcion: 'Montamos sistemas de soporte modernos o tradicionales para tus cortinas.',
    emoji: '🔧'
  },
  {
    titulo: 'Repuestos y Accesorios',
    descripcion: 'Tenemos a disposición repuestos para cortinas modernas o clásicas.',
    emoji: '📦'
  },
  {
    titulo: 'Lavado de Cortinas',
    descripcion: 'Limpieza profesional de cortinas de todo tipo, cuidando las telas y colores.',
    emoji: '🧴'
  },
  {
    titulo: 'Pintura de Pared',
    descripcion: 'Servicio de pintura para interiores con acabados modernos y elegantes.',
    emoji: '🎨'
  }
];

const Servicios = () => {
  return (
    <div className="servicios-container">
      {servicios.map((servicio, index) => (
        <div key={index} className={`servicio-box ${index % 2 === 0 ? 'turquesa' : ''}`}>
          <div className="icono-servicio">{servicio.emoji}</div>
          <h3>{servicio.titulo}</h3>
          <p>{servicio.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
