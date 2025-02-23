package com.codersblock.codersblock.controllers;

import com.codersblock.codersblock.DTO.LoginRequest;
import com.codersblock.codersblock.DTO.LoginResponse;
import com.codersblock.codersblock.DTO.SignUpRequest;
import com.codersblock.codersblock.DTO.SignUpResponse;
import com.codersblock.codersblock.DTO.ChangePasswordRequest;
import com.codersblock.codersblock.DTO.MessageResponse;
import com.codersblock.codersblock.repository.UserRepository;
import com.codersblock.codersblock.service.UserAuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {
    private final UserAuthService userAuthService;

    public AuthController(UserAuthService userAuthService) {
        this.userAuthService = userAuthService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignUpRequest request) {
        try {
            UserRepository user = userAuthService.signup(
                    request.getUsername(),
                    request.getEmail(),
                    request.getPassword()
            );
            return ResponseEntity.ok(new SignUpResponse("Successful registration", user.getUsername(), user.getEmail()));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage(), false));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
        UserRepository user = userAuthService.login(loginRequest.getUsername(), loginRequest.getPassword());

        return ResponseEntity.ok(new LoginResponse(user.getEmail(), user.getUsername(), "Login Successful"));
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@Valid @RequestBody ChangePasswordRequest request) {
        try {
            userAuthService.changePassword(request.getUsername(), request.getCurrentPassword(), request.getNewPassword());
            return ResponseEntity.ok(new MessageResponse("Password changed successfully", true));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage(), false));
        }
    }

    @GetMapping("/verify")
    public ResponseEntity<?> verifySession() {
        // The request will only reach here if it's authenticated
        // due to security configuration
        return ResponseEntity.ok().build();
    }
}
