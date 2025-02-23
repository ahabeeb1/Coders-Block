package com.codersblock.codersblock.DTO;

import lombok.Data;

@Data
public class MessageResponse {
    private String message;
    private boolean success;

    public MessageResponse(String message, boolean success) {
        this.message = message;
        this.success = success;
    }
} 