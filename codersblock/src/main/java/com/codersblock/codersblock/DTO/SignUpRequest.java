package com.codersblock.codersblock.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SignUpRequest {
    @NotBlank(message = "username is required")
    @Size(min = 1, max = 15, message = "username must be between 3-15 characters")
    private String username;
    @NotBlank(message = "email is required")
    @Email(message = "email must be valid")
    private String email;
    @NotBlank(message = "Enter a secure password")
    private String  password;


}
