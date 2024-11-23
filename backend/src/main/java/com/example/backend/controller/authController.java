package com.example.backend.controller;

import com.example.backend.dto.AuthenticationDTO;
import com.example.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class authController {


    @Autowired
    private AuthService authService;

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationDTO authDto){
        return  ResponseEntity.ok(authService.login(authDto));

    }
}
