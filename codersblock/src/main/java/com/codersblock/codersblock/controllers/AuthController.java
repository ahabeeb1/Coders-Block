package com.codersblock.codersblock.controllers;

import com.codersblock.codersblock.DTO.LoginRequest;
import com.codersblock.codersblock.DTO.LoginResponse;
import com.codersblock.codersblock.DTO.SignUpRequest;
import com.codersblock.codersblock.DTO.SignUpResponse;
import com.codersblock.codersblock.repository.UserRepository;
import com.codersblock.codersblock.service.UserAuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/auth")
public class AuthController {
    private final UserAuthService userAuthService;

    public AuthController(UserAuthService userAuthService) {
        this.userAuthService = userAuthService;
    }




    @PostMapping("/signup")
    public ResponseEntity<SignUpResponse> signup(@Valid @RequestBody SignUpRequest request) {
        UserRepository user = userAuthService.signup(
                request.getUsername(),
                request.getEmail(),
                request.getPassword()
        );
        return ResponseEntity.ok(new SignUpResponse("Successful registration", user.getUsername(), user.getEmail()));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
        UserRepository user = userAuthService.login(loginRequest.getUsername(), loginRequest.getPassword());

        return ResponseEntity.ok(new LoginResponse(user.getEmail(), user.getUsername(), "Login Successful"));
    }
}
