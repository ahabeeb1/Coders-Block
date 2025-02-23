package com.codersblock.codersblock.service;

import com.codersblock.codersblock.repository.UserInterface;
import com.codersblock.codersblock.repository.UserRepository;
import com.codersblock.codersblock.DTO.LoginResponse;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Optionals;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class UserAuthService {
    private final UserInterface userInterface;
    private final PasswordEncoder passwordEncoder;

    public UserAuthService(UserInterface userInterface, PasswordEncoder passwordEncoder) {
        this.userInterface = userInterface;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean isEmailAvailable(String email) {
        return userInterface.findByEmail(email).isEmpty();
    }

    public boolean isUsernameAvailable(String username) {
        return userInterface.findByUsername(username).isEmpty();
    }

    public UserRepository signup(String username, String email, String password) {
        if (!isUsernameAvailable(username)) {
            throw new RuntimeException("Username is already taken");
        }
        if (!isEmailAvailable(email)) {
            throw new RuntimeException("Email is already registered");
        }

        UserRepository newUser = new UserRepository();
        newUser.setUsername(username);
        newUser.setEmail(email);
        newUser.setPassword(passwordEncoder.encode(password));
        return userInterface.save(newUser);
    }

    public UserRepository login(String login, String password) {
        Optional<UserRepository> optionalUser = login.contains("@")
                ? userInterface.findByEmail(login)
                : userInterface.findByUsername(login);

        return optionalUser
                .filter(u -> passwordEncoder.matches(password, u.getPassword()))
                .orElseThrow(() -> new RuntimeException("Invalid username/email or password"));
    }

    public void changePassword(String username, String currentPassword, String newPassword) {
        Optional<UserRepository> optionalUser = userInterface.findByUsername(username);
        
        if (optionalUser.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        UserRepository user = optionalUser.get();
        
        // Verify current password
        if (!passwordEncoder.matches(currentPassword, user.getPassword())) {
            throw new RuntimeException("Current password is incorrect");
        }

        // Update to new password
        user.setPassword(passwordEncoder.encode(newPassword));
        userInterface.save(user);
    }

    public UserRepository verifyUser(String username) {
        return userInterface.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public LoginResponse createLoginResponse(UserRepository user) {
        return new LoginResponse(
            user.getEmail(),
            user.getUsername(),
            "Login Successful"
        );
    }
}
