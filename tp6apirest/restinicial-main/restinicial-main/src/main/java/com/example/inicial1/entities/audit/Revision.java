package com.example.inicial1.entities.audit;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence. GeneratedValue;
import jakarta.persistence. GenerationType;
import jakarta.persistence. Id;
import jakarta. persistence. SequenceGenerator;
import jakarta.persistence. Table;
import jakarta.persistence. Temporal;
import jakarta.persistence. TemporalType;

import com.example.inicial1.config.CustomRevisionListener;
import org.hibernate.envers. RevisionEntity;
import org.hibernate.envers. RevisionNumber;
import org.hibernate.envers. RevisionTimestamp;

import lombok. Data;

import java.io.Serializable;

@Entity
//@Table(name="REVISION_INFO",schema = "RBAC")
@RevisionEntity(CustomRevisionListener.class)
@Data
public class Revision implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "revision_seq")
    @SequenceGenerator(
            name = "revision_seq",
            sequenceName = "rbac.seq_revision_id"
    )
    @RevisionNumber
    private int id;

    @Column(name = "REVISION_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    @RevisionTimestamp
    private Date date;


}