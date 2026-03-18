import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registrarUsuario } from '../services/LoginService';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ correo: '', nombre: '', apellido: '', password: '' });
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje({ tipo: 'info', texto: 'Creando cuenta...' });
    try {
      await registrarUsuario(formData);
      setMensaje({ tipo: 'exito', texto: '¡Cuenta creada! Redirigiendo al login...' });
      setTimeout(() => navigate('/login'), 2000);
    } catch (error: any) {
      setMensaje({ tipo: 'error', texto: error.message || 'Error al registrarse' });
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-12 px-4" 
      style={{ backgroundImage: "url('/src/assets/fondo-registro.png')" }}
    >
      {/* 1. BLOQUE SUPERIOR: Logo y Título (Fuera de la tarjeta, centrado) */}
      <div className="text-center mb-8">
        <div className="text-blue-600 text-6xl mb-4 flex justify-center">▲</div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Crear cuenta</h1>
        <p className="mt-2 text-sm text-slate-600">para unirte a Planity</p>
      </div>

      {/* 2. TARJETA BLANCA: El bloque del formulario */}
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl shadow-xl p-8 z-10">
        
        {mensaje.texto && (
          <div className={`p-3 rounded-lg mb-6 text-sm font-medium text-center border ${
            mensaje.tipo === 'error' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-green-50 text-green-700 border-green-100'
          }`}>
            {mensaje.texto}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Correo electrónico</label>
            <input 
              type="email" name="correo" required
              value={formData.correo} onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Nombre</label>
              <input 
                type="text" name="nombre" required
                value={formData.nombre} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Apellido</label>
              <input 
                type="text" name="apellido" required
                value={formData.apellido} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Contraseña</label>
            <input 
              type="password" name="password" required
              value={formData.password} onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#1f883d] hover:bg-[#1a7f31] text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md mt-2"
          >
            Crear cuenta
          </button>
        </form>

        {/* 3. ENLACE INFERIOR: Texto "después de los bloques" */}
        <div className="text-center mt-8 text-sm text-slate-600">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-bold text-blue-600 hover:text-blue-800 transition-colors">
            Inicia Sesión →
          </Link>
        </div>
      </div>
    </div>
  );
}