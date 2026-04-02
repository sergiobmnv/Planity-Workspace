import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cerrarSesion } from '../services/LoginService';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Función para cerrar sesión y volver al login
  const handleLogout = () => {
    cerrarSesion(); // Borra el localStorage
    navigate('/login'); // Te manda a la pantalla de login
  };

  const menuItems = [
    { name: 'Mis Proyectos', path: '/dashboard', icon: '📁' },
    { name: 'Calendario', path: '/calendario', icon: '📅' },
    { name: 'Ajustes', path: '/ajustes', icon: '⚙️' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0">
      
      {/* LOGO Y NOMBRE */}
      <div className="p-6 flex items-center gap-3">
        <Link to="/" className="text-blue-600 text-2xl hover:scale-110 transition-transform">▲</Link>
        <span className="font-bold text-xl text-slate-800 tracking-tight">Planity</span>
      </div>

      {/* MENÚ DE NAVEGACIÓN */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
              location.pathname === item.path
                ? 'bg-blue-50 text-blue-600'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      {/* BOTÓN DE CERRAR SESIÓN */}
      <div className="p-4 border-t border-slate-100">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors font-medium"
        >
          <span>🚪</span> Cerrar sesión
        </button>
      </div>
    </div>
  );
}