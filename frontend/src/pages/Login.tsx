import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUsuario } from '../services/LoginService';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ correo: '', password: '' });
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje({ tipo: 'info', texto: 'Comprobando credenciales...' });
    try {
      await loginUsuario(formData);
      setMensaje({ tipo: 'exito', texto: '¡Bienvenido! Redirigiendo...' });
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (error: any) {
      setMensaje({ tipo: 'error', texto: error.message || 'Credenciales incorrectas' });
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat w-full relative" 
      style={{ backgroundImage: "url('/src/assets/fondo-registro.png')" }}
    >
      {/* BOTÓN FLOTANTE: Volver al inicio */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-200 transition-all hover:scale-105 z-20"
      >
        <span>←</span> Volver al inicio
      </Link>

      <div className="w-full flex flex-col items-center justify-center px-6 py-12">
        
        {/* BLOQUE SUPERIOR: Logo (ahora clickable) y Título */}
        <div className="text-center mb-8 w-full">
          <Link to="/" className="text-blue-600 text-5xl mb-3 flex justify-center hover:scale-110 transition-transform duration-300">
            ▲
          </Link>
          <h1 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">Iniciar sesión</h1>
          <p className="mt-1 text-sm text-[#475569]">en Planity para continuar</p>
        </div>

        {/* TARJETA BLANCA */}
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl shadow-lg p-8 z-10">
          
          {mensaje.texto && (
            <div className={`p-3 rounded-lg mb-6 text-sm font-medium text-center ${
              mensaje.tipo === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-blue-50 text-blue-700'
            }`}>
              {mensaje.texto}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Correo electrónico</label>
              <input 
                type="email" name="correo" required
                value={formData.correo} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm text-slate-900"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-semibold text-slate-700">Contraseña</label>
                <a href="#" className="text-xs text-blue-600 hover:underline">¿La has olvidado?</a>
              </div>
              <input 
                type="password" name="password" required
                value={formData.password} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm text-slate-900"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#1f883d] hover:bg-[#1a7f31] text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-sm text-sm"
            >
              Entrar
            </button>
          </form>

          <div className="text-center mt-8 text-sm text-slate-600">
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="font-bold text-blue-600 hover:text-blue-800 transition-colors">
              Crea una cuenta ahora →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}