import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Registro';

// Un componente súper básico para que no dé error. ¡Mañana lo haremos bonito!
const DashboardTemp = () => (
  <div className="h-screen flex items-center justify-center bg-slate-100">
    <h1 className="text-3xl font-bold text-slate-800">¡Has entrado a la app! 🚀 (Próximamente Dashboard)</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        {/* Añadimos la ruta a la que vamos tras el Login */}
        <Route path="/dashboard" element={<DashboardTemp />} />
      </Routes>
    </BrowserRouter>
  );
}