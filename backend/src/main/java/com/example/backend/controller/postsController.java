package com.example.backend.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.example.backend.entity.postCad;
import com.example.backend.repository.postsRepository;
import com.example.backend.repository.userRepository;
import org.apache.coyote.Response;
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

    @GetMapping("/list/iduser/{iduser}")
    public ResponseEntity<List<postCad>> listAllPostcadsIduser(@PathVariable Integer iduser){
        List<postCad> postcads = postcadRp.findAllByIdUser(iduser);
        return ResponseEntity.ok(postcads);
    }

    @DeleteMapping("/getpost/{id}")
    public ResponseEntity<Optional<postCad>> getPost(@PathVariable int id){
        Optional<postCad> post = postcadRp.findById(id);
        return ResponseEntity.ok(post);
    }

    @PutMapping("/save")
    public ResponseEntity<postCad> savePost(
          @RequestBody postCad post) throws IOException {
        postCad savedPostcad = postcadRp.save(post);
        return ResponseEntity.ok(savedPostcad);
    }

    @PutMapping("/editpost")
    public ResponseEntity<postCad> editpost( @RequestBody postCad post
            ){
        //FUNCAO DESATIVADA 22/11/2024
//         if (post.getUsuario().getTipo_usuario() == 2){
//             post.setStatus(2);
//         }
        postCad postatt = postcadRp.save(post);
        return ResponseEntity.ok(postatt);
    }

    @DeleteMapping("/deletepost/{id}")
    public ResponseEntity<postCad> deletePost(@PathVariable int id){
         postcadRp.deleteById(id);
         return (ResponseEntity<postCad>) ResponseEntity.ok();
    }


    //FUNCAO DESATIVADA 22/11/2024
//    @PutMapping("/confirm/post/{id}")
//        public ResponseEntity<Optional<postCad>> confirmaPost(@PathVariable int id){
//        Optional<postCad> post = postcadRp.findById(id);
//        post.get().setStatus(2);
//        return ResponseEntity.ok(post);
//        }

}