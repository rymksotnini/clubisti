package com.pfa.clubisti.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pfa.clubisti.DTOs.UserDTO;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.*;

/**
 * A user.
 */
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "user", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "username"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })})

public class User extends Audit implements Serializable{

    private static final long serialVersionUID = 1L;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @NotBlank
    @Size(min = 3, max = 50)
    private String username;

    @NotBlank
    @Size(min = 3, max = 50)
    private String name;


    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "badge_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Badge badge;


    private boolean isDeleted = false;

    @NotBlank
    //@JsonIgnore else it won't add password to database
    @Size(min = 6, max = 100)
    private String password;


    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "user")
    private Profile profile;


    @ManyToMany(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL
    )
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "address_id")
    @JsonIgnore
    private Address address;


    public User() {
    }



    public User(String name, String email, String username, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
    }


    public boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Badge getBadge() {
        return badge;
    }

    public void setBadge(Badge badge) {
        this.badge = badge;
    }

    public UserDTO createUserDTO() {
        return new UserDTO(this.id,this.username,this.email);
    }
}
