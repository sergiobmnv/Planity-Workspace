package com.planity.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.planity.backend.model.LoginUsuarioDTO;
import com.planity.backend.model.RegistroUsuarioDTO;
import com.planity.backend.model.UsuarioLogueadoDTO;
import com.planity.backend.service.UsuarioService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {
    
    private final UsuarioService usuarioService;

    public LoginController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // Endpoint para el REGISTRO
    // Ruta completa: POST http://localhost:8080/api/auth/registro
    // Si va bien, devolvemos un 200 OK con el DTO del usuario
    // Si falla (ej: correo repetido), devolvemos un Error 400 con el mensaje
    @PostMapping("/registro")
    public ResponseEntity<?> registrarUsuario(@RequestBody RegistroUsuarioDTO request) {
        try {
            
            UsuarioLogueadoDTO usuarioCreado = usuarioService.registrar(request);
            return ResponseEntity.ok(usuarioCreado);
        } catch (RuntimeException e) {
            
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Endpoint para el LOGIN
    // Ruta completa: POST http://localhost:8080/api/auth/login
    // Si las credenciales son correctas, devolvemos un 200 OK
    // Si falla (contraseña mal, no existe), devolvemos un Error 400
    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario(@RequestBody LoginUsuarioDTO request) {
        try {
            
            UsuarioLogueadoDTO usuarioLogueado = usuarioService.login(request);
            return ResponseEntity.ok(usuarioLogueado);
        } catch (RuntimeException e) {
            
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
