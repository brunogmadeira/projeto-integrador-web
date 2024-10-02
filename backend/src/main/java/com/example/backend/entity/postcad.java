package com.example.backend.entity;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "postcad")
public class postcad implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idpost;

    @ManyToOne
    @JoinColumn(name = "idusuario")
    private usuariocad usuario;

    @Column(length = 80)
    private String titulo;

    @Column(length = 20)
    private String nome_causa;

    @Column(length = 20)
    private String filtro_animal;

    @Column(length = 20)
    private String filtro_raca;

    @Column(length = 20)
    private String filtro_porte;

    @Column(length = 20)
    private String filtro_causa;

    @Column(length = 4000)
    private String descricao;

    @Column(length = 80)
    private String chavepix;

    @Column(length = 80)
    private String contato;

    @Column()
    private Integer status;


    public postcad() {
    }

    public postcad(Integer idpost, usuariocad usuario, String titulo, String nome_causa, String filtro_animal,
                   String filtro_raca, String filtro_porte, String filtro_causa, String descricao,
                   String chavepix, String contato, Integer status) {
        this.idpost = idpost;
        this.usuario = usuario;
        this.titulo = titulo;
        this.nome_causa = nome_causa;
        this.filtro_animal = filtro_animal;
        this.filtro_raca = filtro_raca;
        this.filtro_porte = filtro_porte;
        this.filtro_causa = filtro_causa;
        this.descricao = descricao;
        this.chavepix = chavepix;
        this.contato = contato;
        this.status = status;
    }

    public Integer getIdpost() {
        return idpost;
    }

    public void setIdpost(Integer idpost) {
        this.idpost = idpost;
    }

    public usuariocad getUsuario() {
        return usuario;
    }

    public void setUsuario(usuariocad usuario) {
        this.usuario = usuario;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getNome_causa() {
        return nome_causa;
    }

    public void setNome_causa(String nome_causa) {
        this.nome_causa = nome_causa;
    }

    public String getFiltro_animal() {
        return filtro_animal;
    }

    public void setFiltro_animal(String filtro_animal) {
        this.filtro_animal = filtro_animal;
    }

    public String getFiltro_raca() {
        return filtro_raca;
    }

    public void setFiltro_raca(String filtro_raca) {
        this.filtro_raca = filtro_raca;
    }

    public String getFiltro_porte() {
        return filtro_porte;
    }

    public void setFiltro_porte(String filtro_porte) {
        this.filtro_porte = filtro_porte;
    }

    public String getFiltro_causa() {
        return filtro_causa;
    }

    public void setFiltro_causa(String filtro_causa) {
        this.filtro_causa = filtro_causa;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getChavepix() {
        return chavepix;
    }

    public void setChavepix(String chavepix) {
        this.chavepix = chavepix;
    }

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }



    @Override
    public int hashCode() {
        return Objects.hash(idpost);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        postcad other = (postcad) obj;
        return Objects.equals(idpost, other.idpost);
    }
}
