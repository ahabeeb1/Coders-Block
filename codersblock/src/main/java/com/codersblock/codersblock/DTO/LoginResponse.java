package com.codersblock.codersblock.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class LoginResponse {

    public String email;
//    @NotBlank(message = "username is required")
    public String username;

    public String message;

    public boolean success;

    public LoginResponse(String email, String username, String message) {
        this.email = email;
        this.username = username;
        this.message = message;
        this.success = true;
    }
}
