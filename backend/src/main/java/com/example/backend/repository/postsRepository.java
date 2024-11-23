package com.example.backend.repository;

import com.example.backend.entity.postCad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface postsRepository extends JpaRepository<postCad, Integer> {

    @Query("SELECT p FROM postCad p")
    List<postCad> findAll();

    @Query("SELECT p FROM postCad p WHERE p.status = 1 AND p.titulo LIKE %:titulo% OR p.descricao LIKE %:titulo% OR " +
            "p.filtro_animal LIKE %:titulo% OR p.filtro_raca LIKE %:titulo% OR p.filtro_porte LIKE %:titulo% OR " +
            "p.filtro_causa LIKE %:titulo%")
    List<postCad> findAllByFilter(@Param("titulo") String titulo);

}
