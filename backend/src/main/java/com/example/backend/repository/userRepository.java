package com.example.backend.repository;

import com.example.backend.entity.usuariocad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<usuariocad, Integer> {
}
