package com.planity.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.planity.backend.entity.ProyectoEntity;

@Repository
public interface  ProyectoRepository extends JpaRepository<ProyectoEntity, Long> {
    
    List<ProyectoEntity> findByUsuarioId(Long usuarioId);
}
