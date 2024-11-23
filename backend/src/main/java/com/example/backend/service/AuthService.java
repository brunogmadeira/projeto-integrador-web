package com.example.backend.service;

import com.example.backend.dto.AcessDTO;
import com.example.backend.dto.AuthenticationDTO;
import com.example.backend.entity.usuarioCad;
import com.example.backend.repository.userRepository;
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

    @Autowired
    private userRepository userRespository;

    public AcessDTO login(AuthenticationDTO authDto){
        try {
            UsernamePasswordAuthenticationToken userAuth = new UsernamePasswordAuthenticationToken(authDto.getUsername(), authDto.getPassword());
            Authentication authentication = authenticationManager.authenticate(userAuth);
            UserDetailImpl userAuthenticate = (UserDetailImpl) authentication.getPrincipal();
            String token = jwtUtils.generateTokenFromUserDetailsImpl(userAuthenticate);
            usuarioCad nome = userRespository.findByEmail(authDto.getUsername()).get();

            AcessDTO acessDTO = new AcessDTO(token,nome);
            return acessDTO;
        }catch (BadCredentialsException e){
            //TODO
            return null;
        }
    }
}
