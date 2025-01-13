package com.codersblock.codersblock.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SignUpResponse {
    private String message;
    private String username;
    private String email;

}
