package com.pfa.clubisti.model.requests;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignUpForm {
    @NotBlank
    @Size(min = 3, max = 50)
    private String name;


    @NotBlank
    @Size(max = 60)
    @Email
    private String email;



    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    @NotBlank


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

}
