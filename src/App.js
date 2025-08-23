import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Clasicas from "./pages/Clasicas";
import Modernas from "./pages/Modernas";  // Importar la página Modernas
import Pisos from "./pages/Pisos";
import Automatizacion from "./pages/Automatizacion"
import "./components/Sidebar.css";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/pages/modernas" element={<Modernas />} /> {/* Ruta para Modernas */}
              <Route path="/pages/clasicas" element={<Clasicas />} /> {/* Ruta para Clasicas */}
              <Route path="/pages/pisos" element={<Pisos />} /> {/* Ruta para Pisos */}
              <Route path="/pages/automatizacion" element={<Automatizacion />} /> {/* Ruta para Pisos */}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
