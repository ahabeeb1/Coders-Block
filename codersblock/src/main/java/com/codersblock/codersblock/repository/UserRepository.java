package com.codersblock.codersblock.repository;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="Users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class UserRepository {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(nullable = false)
    public String username;
    @Column(nullable = false, unique = true)
    public String email;
    @Column(nullable = false)
    public String password;

    @Column(nullable = true)
    private String firstName;
    @Column(nullable = true)
    private String lastName;

//    public UserRepository() {
//    }

//    public UserRepository(String email, String username, String password) {
//        this.email = email;
//        this.username = username;
//        this.password = password;
//    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
