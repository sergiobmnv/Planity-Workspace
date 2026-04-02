package com.planity.backend.service.implement;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.planity.backend.entity.ProyectoEntity;
import com.planity.backend.entity.UsuarioEntity;
import com.planity.backend.model.ProyectoDTO;
import com.planity.backend.repository.ProyectoRepository;
import com.planity.backend.repository.UsuarioRepository;
import com.planity.backend.service.ProyectoService;

@Service
public class ProyectoServiceImplement implements ProyectoService {
    
    @Autowired
    private ProyectoRepository proyectoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public ProyectoDTO crearProyecto(Long usuarioId, ProyectoEntity proyecto) {
        UsuarioEntity usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con ID: " + usuarioId));
        
        proyecto.setUsuario(usuario);
        ProyectoEntity proyectoGuardado = proyectoRepository.save(proyecto);
        
        // Devolvemos el DTO
        return mapearADto(proyectoGuardado);
    }

    @Override
    public List<ProyectoDTO> obtenerProyectosDeUsuario(Long usuarioId) {
        List<ProyectoEntity> proyectos = proyectoRepository.findByUsuarioId(usuarioId);
        
        // Convertimos la lista de Entidades a lista de DTOs
        return proyectos.stream()
                .map(this::mapearADto)
                .collect(Collectors.toList());
    }

    // --- MÉTODO AUXILIAR PARA MAPEAR ---
    // Pasa los datos de la Entidad al DTO
    private ProyectoDTO mapearADto(ProyectoEntity entidad) {
        ProyectoDTO dto = new ProyectoDTO();
        dto.setId(entidad.getId());
        dto.setNombre(entidad.getNombre());
        dto.setDescripcion(entidad.getDescripcion());
        if (entidad.getUsuario() != null) {
            dto.setUsuarioId(entidad.getUsuario().getId());
        }
        return dto;
    }
}