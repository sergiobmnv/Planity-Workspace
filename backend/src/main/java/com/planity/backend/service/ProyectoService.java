package com.planity.backend.service;

import java.util.List;

import com.planity.backend.entity.ProyectoEntity;
import com.planity.backend.model.ProyectoDTO;

public interface ProyectoService {
    
    ProyectoDTO crearProyecto(Long usuarioId, ProyectoEntity proyecto);
    
    List<ProyectoDTO> obtenerProyectosDeUsuario(Long usuarioId);
}
