package com.pfa.clubisti.model.requests;

import com.pfa.clubisti.model.ProjectStatus;

import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

public class CreateProjectReq {

    private Long id;

    private String name;


    private String shortDescription;


    private double amount;



    private double minDonationAmount;


    private double maxDonationAmount;



    private Set<Long> categoriesIds = new HashSet<>();

    public CreateProjectReq() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getMinDonationAmount() {
        return minDonationAmount;
    }

    public void setMinDonationAmount(double minDonationAmount) {
        this.minDonationAmount = minDonationAmount;
    }

    public double getMaxDonationAmount() {
        return maxDonationAmount;
    }

    public void setMaxDonationAmount(double maxDonationAmount) {
        this.maxDonationAmount = maxDonationAmount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }



    public Set<Long> getCategoriesIds() {
        return categoriesIds;
    }

    public void setCategoriesIds(Set<Long> categoriesIds) {
        this.categoriesIds = categoriesIds;
    }
}
