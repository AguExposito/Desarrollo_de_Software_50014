package org.example;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {
    public static void main(String[] args) {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("example-unit");

        EntityManager entityManager = entityManagerFactory.createEntityManager();

        try {
            entityManager.getTransaction().begin();

            Categoria perecedero = Categoria.builder().build();
            perecedero.setDenominacion("perecedero");

            Categoria lacteos = Categoria.builder().build();
            lacteos.setDenominacion("Lacteos");

            Categoria limpieza = Categoria.builder().build();
            limpieza.setDenominacion("Limpieza");

            Articulo leche = Articulo.builder().build();
            leche.setCantidad(3);
            leche.setDenominacion("leche 1");
            leche.setPrecio(1000);

            Articulo detergente = Articulo.builder().build();
            detergente.setCantidad(4);
            detergente.setDenominacion("detergente");
            detergente.setPrecio(500);

            leche.getCategorias().add(perecedero);

            leche.getCategorias().add(perecedero);
            leche.getCategorias().add(lacteos);

            lacteos.getArticulos().add(leche);
            perecedero.getArticulos().add(leche);
            detergente.getCategorias().add(limpieza);
            limpieza.getArticulos().add(detergente);

            Factura fac1 = Factura.builder().build();
            fac1.setFecha("27/08/2024");
            fac1.setNumero(40);

            Cliente cliente = Cliente.builder().build();
            cliente.setNombre("Agus");
            cliente.setApellido("Expósito");
            cliente.setDni(34);
            Domicilio domicilio = Domicilio.builder().build();
            domicilio.setNombeCalle("suipacha");
            domicilio.setNumero(239);

            cliente.setDomicilio(domicilio);

            fac1.setCliente(cliente);

            DetalleFactura linea1 = new DetalleFactura();

            linea1.setArticulo(leche);
            linea1.setCantidad(4);
            linea1.setSubtotal(450);

            fac1.getFacturas().add(linea1);

            DetalleFactura linea2 = new DetalleFactura();

            linea2.setArticulo(detergente);
            linea2.setCantidad(1);
            linea2.setSubtotal(50);

            fac1.getFacturas().add(linea2);

            entityManager.persist(fac1);

            entityManager.flush();

            entityManager.getTransaction().commit();
        } catch (Exception e) {

            entityManager.getTransaction().rollback();
            System.out.println(e.getMessage());
            System.out.println("No se pudo grabar la clase Factura");

            // Cerrar el EntityManager y el EntityManagerFactory
            entityManager.close();
            entityManagerFactory.close();
        }
    }
}
