package com.codersblock.codersblock.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginRequest {
    @NotBlank(message = "username or email is required")
    String username;
    @NotBlank(message = "password is required")
    String password;
}
