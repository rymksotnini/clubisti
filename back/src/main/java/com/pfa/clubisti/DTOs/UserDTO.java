package com.pfa.clubisti.DTOs;

import com.pfa.clubisti.model.Address;
import com.pfa.clubisti.model.Badge;
import com.pfa.clubisti.model.Profile;
import com.pfa.clubisti.model.Role;

import java.util.Set;

public class UserDTO {

    private Long id;

    private String username;

    private String email;

    private Badge badge;

    private Profile profile;

    private Set<Role> roles;

    private Address address;

    public UserDTO(Long id, String username, String email) {
        this.id = id;
        this.username = username;
        this.email = email;
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

    public Badge getBadge() {
        return badge;
    }

    public void setBadge(Badge badge) {
        this.badge = badge;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
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

}
