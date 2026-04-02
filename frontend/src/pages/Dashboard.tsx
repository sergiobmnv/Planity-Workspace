import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ModalNuevoProyecto from '../components/ModalNuevoProyecto';
import { obtenerUsuarioLogueado } from '../services/LoginService';
import { obtenerProyectosUsuario, crearProyecto, type ProyectoDTO, type NuevoProyecto } from '../services/ProyectoService';

export default function Dashboard() {
  const navigate = useNavigate();
  const [proyectos, setProyectos] = useState<ProyectoDTO[]>([]);
  const [cargando, setCargando] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const usuario = obtenerUsuarioLogueado();

  const cargarProyectos = async () => {
    if (!usuario) return;
    try {
      const datos = await obtenerProyectosUsuario(usuario.idUsuario);
      setProyectos(datos);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    if (!usuario) {
      navigate('/login');
      return;
    }
    cargarProyectos();
  }, [navigate]);

  const handleCrearProyecto = async (nuevo: NuevoProyecto) => {
    if (!usuario) return;
    try {
      await crearProyecto(usuario.idUsuario, nuevo);
      setIsModalOpen(false);
      cargarProyectos();
    } catch (error) {
      alert("Error al guardar");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />

      <main className="flex-1 ml-64 p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">¡Hola, {usuario?.nombre}! 👋</h1>
            <p className="text-slate-500">Gestiona tus espacios de trabajo y proyectos.</p>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
          >
            <span className="text-xl">+</span> Nuevo Proyecto
          </button>
        </header>

        {cargando ? (
          <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div></div>
        ) : proyectos.length === 0 ? (
          <div className="text-center bg-white p-16 rounded-2xl border-2 border-dashed border-slate-200">
            <div className="text-5xl mb-4">📂</div>
            <h3 className="text-xl font-bold text-slate-800">No hay proyectos todavía</h3>
            <p className="text-slate-500 mt-2">Crea uno para empezar a organizar tus tareas.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((p) => (
              <div key={p.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[10px] uppercase tracking-widest font-black px-2 py-1 rounded-md ${p.estado ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                    {p.estado ? 'Activo' : 'Cerrado'}
                  </span>
                  <button className="text-slate-300 group-hover:text-slate-600">•••</button>
                </div>
                <h3 className="font-bold text-xl mb-2 capitalize">{p.nombre}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-6">{p.descripcion}</p>
                <div className="flex justify-end pt-4 border-t border-slate-50">
                  <span className="text-blue-600 text-sm font-bold group-hover:underline">Abrir proyecto →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <ModalNuevoProyecto 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleCrearProyecto} 
      />
    </div>
  );
}