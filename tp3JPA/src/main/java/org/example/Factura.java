package org.example;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString

@Entity
public class Factura implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String fecha;
    private int numero;
    private int total;

    @OneToOne(cascade = CascadeType.PERSIST)

    @JoinColumn(name = "fk_cliente")
    private  Cliente cliente;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "factura_id")

    @Builder.Default
    private Set<DetalleFactura> facturas = new HashSet<>();
}