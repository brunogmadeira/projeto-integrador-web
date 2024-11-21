package com.example.backend.controller;

import com.example.backend.entity.usuarioCad;
import com.example.backend.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class userController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private userRepository userRepository;

    @PostMapping("/novouser")
    public void newUser(@RequestBody usuarioCad user) {
        user.setSenha(passwordEncoder.encode(user.getSenha())); // Codifica a senha
        userRepository.save(user); // Salva o usuário no banco
    }
}
