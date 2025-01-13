package com.codersblock.codersblock.service;

import com.codersblock.codersblock.repository.UserInterface;
import com.codersblock.codersblock.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Optionals;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserAuthService {
    private final UserInterface user;

    private final PasswordEncoder passwordEncoder;

    public UserAuthService(UserInterface user, PasswordEncoder passwordEncoder) {
        this.user = user;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean isEmailAvailable(String email) {
        return user.findByEmail(email).isEmpty();
    }

    public boolean isUsernameAvailable(String username) {
        return user.findByUsername(username).isEmpty();
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
        return user.save(newUser);
    }

    public UserRepository login(String login, String password) {
        Optional<UserRepository> optionalUser = login.contains("@")
                ? user.findByEmail(login)
                : user.findByUsername(login);

        return optionalUser
                .filter(u -> passwordEncoder.matches(password, u.getPassword()))
                .orElseThrow(() -> new RuntimeException("Invalid username/email or password"));
    }
}
