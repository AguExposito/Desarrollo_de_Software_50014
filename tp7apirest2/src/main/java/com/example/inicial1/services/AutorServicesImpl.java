package com.example.inicial1.services;

import com.example.inicial1.entities.Autor;
import com.example.inicial1.repositories.AutorRepository;
import com.example.inicial1.repositories.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AutorServicesImpl extends BaseServiceImpl<Autor, Long> implements AutorServices{

    @Autowired
    private AutorRepository autorRepository;

    public AutorServicesImpl(BaseRepository<Autor, Long> baseRepository) {
        super(baseRepository);

    }
}
