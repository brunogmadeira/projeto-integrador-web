package com.example.backend.service;

import com.example.backend.dto.AcessDTO;
import com.example.backend.dto.AuthenticationDTO;
import com.example.backend.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    public AcessDTO login(AuthenticationDTO authDto){
        System.out.println(authDto.getPassword());
        System.out.println(authDto.getUsername());

        try {

            UsernamePasswordAuthenticationToken userAuth = new UsernamePasswordAuthenticationToken(authDto.getUsername(), authDto.getPassword());
            System.out.println("entrou 1");

            Authentication authentication = authenticationManager.authenticate(userAuth);
            System.out.println("entrou 2");

            UserDetailImpl userAuthenticate = (UserDetailImpl) authentication.getPrincipal();
            System.out.println("entrou 3");


            String token = jwtUtils.generateTokenFromUserDetailsImpl(userAuthenticate);
            System.out.println("entrou 4");

            AcessDTO acessDTO = new AcessDTO(token);
            System.out.println("retornou esapoha?");
            return acessDTO;

        }catch (BadCredentialsException e){
            //TODO
            return null;
        }
    }
}
