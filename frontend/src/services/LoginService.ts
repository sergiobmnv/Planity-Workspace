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
        // Si hay error (ej. correo repetido), leemos el mensaje de Spring Boot
        const mensajeError = await respuesta.text();
        throw new Error(mensajeError);
    }

    return respuesta.json();
};

// Dejamos el login preparado para el siguiente paso
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

    return respuesta.json();
};