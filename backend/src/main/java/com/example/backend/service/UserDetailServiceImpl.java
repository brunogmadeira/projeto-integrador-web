package com.example.backend.service;

import com.example.backend.entity.usuarioCad;
import com.example.backend.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {


    @Autowired
    private userRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        usuarioCad usuario = userRepository.findByEmail(username).get();

        return UserDetailImpl.build(usuario);
    }
}
