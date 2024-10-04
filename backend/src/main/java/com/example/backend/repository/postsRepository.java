package com.example.backend.repository;

import com.example.backend.entity.postcad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface postsRepository extends JpaRepository<postcad, Integer> {

    @Query("SELECT p FROM postcad p")
    List<postcad> findAll();

    @Query("SELECT p FROM postcad p WHERE p.titulo LIKE %:titulo% or p.descricao LIKE %:titulo%")
    List<postcad> findAllByFilter(@Param("titulo") String titulo);

}
