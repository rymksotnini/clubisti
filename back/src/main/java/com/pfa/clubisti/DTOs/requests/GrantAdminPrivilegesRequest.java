package com.pfa.clubisti.DTOs.requests;

public class GrantAdminPrivilegesRequest {
    private boolean upgrade;

    public boolean isUpgrade() {
        return upgrade;
    }

    public void setUpgrade(boolean upgrade) {
        this.upgrade = upgrade;
    }
}
