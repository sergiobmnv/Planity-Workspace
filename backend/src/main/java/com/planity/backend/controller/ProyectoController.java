package com.planity.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.planity.backend.entity.ProyectoEntity;
import com.planity.backend.model.ProyectoDTO;
import com.planity.backend.service.ProyectoService;

@RestController
@RequestMapping("/api/proyectos")
@CrossOrigin(origins = "http://localhost:5173")
public class ProyectoController {
    
    @Autowired
    private ProyectoService proyectoService;

    @PostMapping("/usuario/{usuarioId}")
    public ResponseEntity<ProyectoDTO> crearProyecto( // Ahora devuelve ProyectoDTO
            @PathVariable Long usuarioId, 
            @RequestBody ProyectoEntity proyecto) {
        
        ProyectoDTO nuevoProyecto = proyectoService.crearProyecto(usuarioId, proyecto);
        return ResponseEntity.ok(nuevoProyecto);
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<ProyectoDTO>> obtenerProyectos(@PathVariable Long usuarioId) { // Ahora devuelve List<ProyectoDTO>
        List<ProyectoDTO> proyectos = proyectoService.obtenerProyectosDeUsuario(usuarioId);
        return ResponseEntity.ok(proyectos);
    }
}
