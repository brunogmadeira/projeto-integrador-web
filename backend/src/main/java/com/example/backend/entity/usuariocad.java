package com.example.backend.entity;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "usuariocad")
public class usuariocad implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idusuario;

    @Column(length = 80, nullable = false)
    private String nome;

    @Column(nullable = true)
    private Long telefone_celular;

    @Column(length = 80, nullable = false)
    private String email;

    @Column(length = 80, nullable = false)
    private String senha;

    @Column(nullable = false)
    private Integer tipo_usuario;

    @Column(length = 80)
    private String token;

    public usuariocad() {
    }

    public usuariocad(Integer idusuario, String nome, Long telefone_celular, String email, String senha, Integer tipo_usuario, String token) {
        this.idusuario = idusuario;
        this.nome = nome;
        this.telefone_celular = telefone_celular;
        this.email = email;
        this.senha = senha;
        this.tipo_usuario = tipo_usuario;
        this.token = token;
    }

    public Integer getIdusuario() {
        return idusuario;
    }

    public void setIdusuario(Integer idusuario) {
        this.idusuario = idusuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getTelefone_celular() {
        return telefone_celular;
    }

    public void setTelefone_celular(Long telefone_celular) {
        this.telefone_celular = telefone_celular;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Integer getTipo_usuario() {
        return tipo_usuario;
    }

    public void setTipo_usuario(Integer tipo_usuario) {
        this.tipo_usuario = tipo_usuario;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idusuario);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        usuariocad other = (usuariocad) obj;
        return Objects.equals(idusuario, other.idusuario);
    }
}