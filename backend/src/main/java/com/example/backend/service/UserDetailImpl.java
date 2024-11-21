package com.example.backend.service;

import com.example.backend.entity.usuarioCad;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserDetailImpl implements UserDetails {

    private Integer id;
    private String name;
    private String username;
    private String email;
    private String password;

    public UserDetailImpl(Integer id, Collection<? extends GrantedAuthority> authorities, String email, String username,  String name, String password) {
        this.id = id;
        this.authorities = authorities;
        this.email = email;
        this.username = username;
        this.name = name;
        this.password = password;
    }

    public static UserDetailImpl build(usuarioCad usuario){
        return new UserDetailImpl(usuario.getIdusuario(), new ArrayList<>(), usuario.getEmail(), usuario.getEmail() , usuario.getNome(), usuario.getSenha());
    }

    private Collection<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
