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
        System.out.println(postcads.toArray());
        return ResponseEntity.ok(postcads);
    }

    @GetMapping("/test")
    public ResponseEntity<List<usuariocad>> test() {
        List<usuariocad> user = uRepository.findAll();
        return ResponseEntity.ok(user);
    }

    @PutMapping("/save")
    public ResponseEntity<postcad> savePost(
            @RequestParam("idpost") Integer idpost,
            @RequestParam("usuario") usuariocad usuario,
            @RequestParam("titulo") String titulo,
            @RequestParam("nome_causa") String nome_causa,
            @RequestParam("filtro_animal") String filtro_animal,
            @RequestParam("filtro_raca") String filtro_raca,
            @RequestParam("filtro_porte") String filtro_porte,
            @RequestParam("filtro_causa") String filtro_causa,
            @RequestParam("descricao") String descricao,
            @RequestParam("chavepix") String chavepix,
            @RequestParam("contato") String contato,
            @RequestParam("status") Integer status,
            @RequestParam("imagem") MultipartFile imagemFile) throws IOException {

        postcad postcad = new postcad();
        postcad.setIdpost(idpost);
        postcad.setUsuario(usuario);
        postcad.setTitulo(titulo);
        postcad.setNome_causa(nome_causa);
        postcad.setFiltro_animal(filtro_animal);
        postcad.setFiltro_raca(filtro_raca);
        postcad.setFiltro_porte(filtro_porte);
        postcad.setFiltro_causa(filtro_causa);
        postcad.setDescricao(descricao);
        postcad.setChavepix(chavepix);
        postcad.setContato(contato);
        postcad.setStatus(status);

        if (imagemFile != null && !imagemFile.isEmpty()) {
            postcad.setImagem(imagemFile.getBytes());
            System.out.println("Imagem size: " + postcad.getImagem().length);
        } else {
            postcad.setImagem(null);
        }

        postcad savedPostcad = postcadRepository.save(postcad);
        return ResponseEntity.ok(savedPostcad);
    }

//    @PostMapping("/testInsert")
//    public ResponseEntity<String> testInsert() throws IOException {
//        postcad testPostcad = new postcad();
//        testPostcad.setTitulo("Teste");
//        testPostcad.setNome_causa("Causa de Teste");
//        testPostcad.setDescricao("Descrição do Post de Teste");
//        testPostcad.setStatus(1);
//
//        byte[] testImage = new byte[100];
//        testPostcad.setImagem(testImage);
//
//        try {
//            postcadRepository.save(testPostcad);
//            return ResponseEntity.ok("Inserido com sucesso");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: " + e.getMessage());
//        }
//    }

}