package com.example.inicial1.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Builder
public class Domicilio extends Base{

    private String calle;
    private int numero;

    @ManyToOne(optional = false) //es para que esta opcion no pueda ser null
    @JoinColumn(name = "fk_localidad")
    private Localidad localidad;
}
