package com.example.inicial1.services;

import com.example.inicial1.entities.Base;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.List;

public interface BaseService<E extends Base, ID extends Serializable>{
    public List<E> findAll() throws Exception; //Trae una lista de las personas que estan en la base de datos
    public Page<E> findAll(Pageable pageable) throws Exception;
    public E findById(ID id) throws Exception;
    public E save(E entity) throws Exception; // crea una nueva entidad
    public E update(ID id, E entity) throws Exception;
    public boolean delete(ID id) throws Exception;
}
