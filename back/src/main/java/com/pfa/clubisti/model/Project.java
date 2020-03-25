package com.pfa.clubisti.model;


import org.hibernate.annotations.NaturalId;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "project")
public class Project extends Audit implements Serializable  {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double lastUpdatedSum;



    private String name;


    private String shortDescription;


    private double amount;


    private double minDonationAmount;


    private double maxDonationAmount;


    @Enumerated(EnumType.STRING)
    @Column(length = 60)
    private ProjectStatus status;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "offer_categories",
            joinColumns = { @JoinColumn(name = "offer_id") },
            inverseJoinColumns = { @JoinColumn(name = "category_id") })
    private Set<Category> categories = new HashSet<>();

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

    public double getLastUpdatedSum() {
        return lastUpdatedSum;
    }

    public void setLastUpdatedSum(double lastUpdatedSum) {
        this.lastUpdatedSum = lastUpdatedSum;
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

    public ProjectStatus getStatus() {
        return status;
    }

    public void setStatus(ProjectStatus status) {
        this.status = status;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }
}
