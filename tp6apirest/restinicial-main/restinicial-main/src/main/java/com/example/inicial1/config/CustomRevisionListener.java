package com.example.inicial1.config;

import org.hibernate.envers. RevisionListener;
import com.example.inicial1.entities.audit. Revision;

public class CustomRevisionListener implements RevisionListener {

    public void newRevision(Object revisionEntity) { final Revision revision = (Revision) revisionEntity; }

}
