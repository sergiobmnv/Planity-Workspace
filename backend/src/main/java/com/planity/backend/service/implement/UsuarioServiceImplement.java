package com.planity.backend.service.implement;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.planity.backend.entity.UsuarioEntity;
import com.planity.backend.model.LoginUsuarioDTO;
import com.planity.backend.model.RegistroUsuarioDTO;
import com.planity.backend.model.UsuarioLogueadoDTO;
import com.planity.backend.repository.UsuarioRepository;
import com.planity.backend.service.UsuarioService;


@Service
public class UsuarioServiceImplement implements UsuarioService {
    
    private final UsuarioRepository usuarioRepository;


    public UsuarioServiceImplement(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UsuarioLogueadoDTO registrar(RegistroUsuarioDTO dto) {
       // 1. Comprobar si el correo ya existe
        if (usuarioRepository.findByCorreo(dto.getcorreo()).isPresent()) {
            throw new RuntimeException("El correo ya está registrado");
        }

        // 2. Crear la entidad a partir del DTO
        UsuarioEntity nuevoUsuario = new UsuarioEntity();
        nuevoUsuario.setCorreo(dto.getcorreo());
        nuevoUsuario.setNombre(dto.getNombre());
        nuevoUsuario.setApellido(dto.getApellido());
        nuevoUsuario.setPassword(dto.getPassword());

        // 3. Guardar en BD
        UsuarioEntity guardado = usuarioRepository.save(nuevoUsuario);

        // 4. Devolver el DTO limpio
        return new UsuarioLogueadoDTO(guardado.getId(), guardado.getCorreo(), guardado.getNombre(), guardado.getApellido());
    }

    @Override
    public UsuarioLogueadoDTO login(LoginUsuarioDTO dto) {

        // 1. Buscar usuario por correo
        Optional<UsuarioEntity> usuarioOpt = usuarioRepository.findByCorreo(dto.getcorreo());

        if (usuarioOpt.isEmpty()) {
            throw new RuntimeException("Usuario no encontrado");
        }

        UsuarioEntity usuario = usuarioOpt.get();

        // 2. Comprobar contraseña
        if (!usuario.getPassword().equals(dto.getPassword())) {
            throw new RuntimeException("Contraseña incorrecta");
        }

        // 3. Devolver DTO de usuario logueado
        return new UsuarioLogueadoDTO(usuario.getId(), usuario.getCorreo(), usuario.getNombre(), usuario.getApellido());

    }

}