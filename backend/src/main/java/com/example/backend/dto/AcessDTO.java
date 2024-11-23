package com.example.backend.dto;

import com.example.backend.entity.usuarioCad;

public class AcessDTO {

    private String token;
    private String user;
    private String nome;


    public AcessDTO(String token, usuarioCad usuario) {
        this.token = token;
        this.user = usuario.getEmail();
        this.nome = usuario.getNome();
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
