package com.planity.backend.service;

import com.planity.backend.model.LoginUsuarioDTO;
import com.planity.backend.model.RegistroUsuarioDTO;
import com.planity.backend.model.UsuarioLogueadoDTO;

public interface UsuarioService {
    
    
    UsuarioLogueadoDTO registrar(RegistroUsuarioDTO dto);

    UsuarioLogueadoDTO login(LoginUsuarioDTO dto);

}