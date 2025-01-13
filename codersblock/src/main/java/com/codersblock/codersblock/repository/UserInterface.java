package com.codersblock.codersblock.repository;

import jakarta.persistence.Id;
import org.apache.catalina.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserInterface extends CrudRepository<UserRepository, Long> {

//    List<UserRepository> listAll();
//    List<UserRepository> getUserSettings(Id id);
    Optional<UserRepository> findByEmail(String email);
    Optional<UserRepository> findByUsername(String username);

}
