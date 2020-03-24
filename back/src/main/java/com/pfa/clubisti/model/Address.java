package com.pfa.clubisti.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Set;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "address")
public class Address implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String city;

    private String street;

    private String street2;


    @Size(max = 20)
    @Column(name = "postal_code")
    private String postalCode;

    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "address")
    private Organisation organisation;

    @OneToMany(mappedBy="address")
    private Set<User> users;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "country_id", nullable=true)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Country country;

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
