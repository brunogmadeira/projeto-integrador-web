package com.example.backend.controller;

import java.io.IOException;
import java.util.List;

import com.example.backend.entity.postCad;
import com.example.backend.repository.postsRepository;
import com.example.backend.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/postcad")
public class postsController {

    @Autowired
    private postsRepository postcadRp;
    @Autowired
    private userRepository userRp;

    @GetMapping("/list")
    public ResponseEntity<List<postCad>> listAllPostcads() {
        List<postCad> postcads = postcadRp.findAll();
        return ResponseEntity.ok(postcads);
    }

    @GetMapping("/list/filtro/{filtro}")
    public ResponseEntity<List<postCad>> listAllPostcadsFilter(@PathVariable String filtro){
        List<postCad> postcads = postcadRp.findAllByFilter(filtro);
        return ResponseEntity.ok(postcads);
    }

    @PutMapping("/save")
    public ResponseEntity<postCad> savePost(
          @RequestBody postCad post) throws IOException {
        postCad savedPostcad = postcadRp.save(post);
        return ResponseEntity.ok(savedPostcad);
    }

    @PutMapping("/editpost")
    public ResponseEntity<postCad> editpost(
            @PathVariable int id, @RequestBody postCad post
            ){
         if (post.getUsuario().getTipo_usuario() == 2){
             post.setStatus(2);
         }
        postCad postatt = postcadRp.save(post);
        return ResponseEntity.ok(postatt);
    }

    @DeleteMapping("/deletepost/{id}")
    public ResponseEntity<postCad> deletePost(@PathVariable int id){
         postcadRp.deleteById(id);
         return (ResponseEntity<postCad>) ResponseEntity.ok();
    }

}