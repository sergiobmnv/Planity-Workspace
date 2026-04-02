import { useState } from 'react';
import { type NuevoProyecto } from '../services/ProyectoService';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (proyecto: NuevoProyecto) => void;
}

export default function ModalNuevoProyecto({ isOpen, onClose, onSubmit }: ModalProps) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nombre, descripcion });
    setNombre('');
    setDescripcion('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">Crear Nuevo Proyecto</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Nombre del proyecto</label>
            <input 
              type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              placeholder="Ej. Rediseño de la web"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Descripción</label>
            <textarea 
              required value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows={3}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm resize-none"
              placeholder="Breve descripción del objetivo del proyecto..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              type="button" onClick={onClose}
              className="flex-1 bg-white text-slate-700 font-semibold py-2.5 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="flex-1 bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-colors"
            >
              Crear Proyecto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}