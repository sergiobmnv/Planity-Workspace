// src/services/authService.ts

const API_URL = 'http://localhost:8080/api';

export const registrarUsuario = async (datosRegistro: any) => {
    const respuesta = await fetch(`${API_URL}/registro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosRegistro),
    });

    if (!respuesta.ok) {
        const mensajeError = await respuesta.text();
        throw new Error(mensajeError);
    }

    return respuesta.json();
};

export const loginUsuario = async (datosLogin: any) => {
    const respuesta = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosLogin),
    });

    if (!respuesta.ok) {
        const mensajeError = await respuesta.text();
        throw new Error(mensajeError);
    }

    const data = await respuesta.json();
    
    // Guardamos los datos del usuario (que deberían incluir su 'id') en el navegador
    localStorage.setItem('usuarioPlanity', JSON.stringify(data));

    return data;
};

// Devuelve los datos del usuario actual si está logueado
export const obtenerUsuarioLogueado = () => {
    const usuarioStr = localStorage.getItem('usuarioPlanity');
    if (usuarioStr) {
        return JSON.parse(usuarioStr);
    }
    return null;
};

// Borra los datos para cerrar la sesión
export const cerrarSesion = () => {
    localStorage.removeItem('usuarioPlanity');
};