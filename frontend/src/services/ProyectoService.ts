const API_URL = 'http://localhost:8080/api/proyectos';

export interface ProyectoDTO {
  id: number;
  nombre: string;
  descripcion: string;
  estado: boolean; // Sincronizado con tu SQL
  usuarioId: number;
}

export interface NuevoProyecto {
  nombre: string;
  descripcion: string;
}

export const obtenerProyectosUsuario = async (usuarioId: number): Promise<ProyectoDTO[]> => {
  const response = await fetch(`${API_URL}/usuario/${usuarioId}`);
  if (!response.ok) throw new Error('Error al cargar proyectos');
  return await response.json();
};

export const crearProyecto = async (usuarioId: number, proyecto: NuevoProyecto): Promise<ProyectoDTO> => {
  const response = await fetch(`${API_URL}/usuario/${usuarioId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(proyecto),
  });
  if (!response.ok) throw new Error('Error al crear proyecto');
  return await response.json();
};