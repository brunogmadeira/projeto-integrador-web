package com.example.backend.repository;

import com.example.backend.entity.usuarioCad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<usuarioCad, Integer> {
}
