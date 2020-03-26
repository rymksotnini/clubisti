package com.pfa.clubisti.DTOs.response;


import com.pfa.clubisti.model.User;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private User user;
    private Collection<? extends GrantedAuthority> authorities;

    public JwtResponse(String accessToken, User user, Collection<? extends GrantedAuthority> authorities) {
        this.token = accessToken;
        this.user = user;
        this.authorities = authorities;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }



    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
}
