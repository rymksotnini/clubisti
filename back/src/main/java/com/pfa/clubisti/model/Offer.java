package com.pfa.clubisti.model;




import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.NaturalId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class Offer extends Audit implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String largeImagePath;

    @NotBlank
    private String longImagePath;

    @NotBlank
    private String name;

    @NotBlank
    private String shortDescription;

    @NotBlank
    private String smallImagePath;

    @NotBlank
    private double totalAmount;




    public  Offer() {
    }

    public Offer( String largeImagePath,  String longImagePath,  String name,  String shortDescription,  String smallImagePath,  double totalAmount) {
        this.largeImagePath = largeImagePath;
        this.longImagePath = longImagePath;
        this.name = name;
        this.shortDescription = shortDescription;
        this.smallImagePath = smallImagePath;
        this.totalAmount = totalAmount;
    }
}
