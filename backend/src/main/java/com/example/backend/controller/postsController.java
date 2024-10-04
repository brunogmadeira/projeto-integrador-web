package com.example.backend.controller;

import java.io.IOException;
import java.util.List;

import com.example.backend.entity.postcad;
import com.example.backend.entity.usuariocad;
import com.example.backend.repository.postsRepository;
import com.example.backend.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/postcad")
public class postsController {

    @Autowired
    private postsRepository postcadRepository;
    @Autowired
    private userRepository uRepository;

    @GetMapping("/list")
    public ResponseEntity<List<postcad>> listAllPostcads() {
        List<postcad> postcads = postcadRepository.findAll();
        return ResponseEntity.ok(postcads);
    }

    @GetMapping("/list/filtro/{filtro}")
    public ResponseEntity<List<postcad>> listAllPostcadsFilter(@PathVariable String filtro){
        List<postcad> postcads = postcadRepository.findAllByFilter(filtro);
        return ResponseEntity.ok(postcads);
    }


    @GetMapping("/test")
    public ResponseEntity<List<usuariocad>> test() {
        List<usuariocad> user = uRepository.findAll();
        return ResponseEntity.ok(user);
    }

    @PutMapping("/save")
    public ResponseEntity<postcad> savePost(
          @RequestBody postcad post) throws IOException {
        postcad savedPostcad = postcadRepository.save(post);
        return ResponseEntity.ok(savedPostcad);
    }





}