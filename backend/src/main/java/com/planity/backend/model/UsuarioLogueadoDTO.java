package com.planity.backend.model;

public class UsuarioLogueadoDTO {
    
    private Long idUsuario;
    private String correo;
    private String nombre;
    private String apellido;

    public UsuarioLogueadoDTO() {

    }

    public UsuarioLogueadoDTO(Long idUsuario, String correo, String nombre, String apellido) {

        this.idUsuario = idUsuario;
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

}