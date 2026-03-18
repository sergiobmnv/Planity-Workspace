package com.planity.backend.model;

public class LoginUsuarioDTO {
    
    private String correo;
    private String password;

    public LoginUsuarioDTO() {

    }

    public LoginUsuarioDTO(String correo, String password) {

        this.correo = correo;
        this.password = password;
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