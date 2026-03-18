package com.planity.backend.model;

public class RegistroUsuarioDTO {
    
    private String nombre;
    private String apellido;
    private String correo;
    private String password;

    public RegistroUsuarioDTO() {

    }

    public RegistroUsuarioDTO(String apellido, String correo, String nombre, String password) {

        this.apellido = apellido;
        this.correo = correo;
        this.nombre = nombre;
        this.password = password;
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

    public String getcorreo() {
        return correo;
    }

    public void setcorreo(String correo) {
        this.correo = correo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}