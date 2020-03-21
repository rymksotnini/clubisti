package com.pfa.clubisti.controller;

import com.pfa.clubisti.exception.ResourceNotFoundException;
import com.pfa.clubisti.model.Role;
import com.pfa.clubisti.model.RoleName;
import com.pfa.clubisti.model.User;
import com.pfa.clubisti.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@RestController
public class UserController {

    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User newUser) {
        if (userRepository.findOneByEmail(newUser.getEmail()) != null) {
            System.out.println("username Already exist " + newUser.getEmail());
            return new ResponseEntity("user with email " + newUser.getUsername() + "already exist ", HttpStatus.CONFLICT);
        }
        Role role = new Role();
        role.setName(RoleName.ROLE_USER);
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        newUser.setRoles(roles);
        return new ResponseEntity<>(userRepository.save(newUser), HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        if (userRepository.findOneByEmail(user.getEmail()) == null) {
            return new ResponseEntity("user with email " + user.getEmail() + "doesn't exist ", HttpStatus.CONFLICT);
        }
        if (userRepository.findOneByEmail(user.getEmail()).getPassword() != user.getPassword()) {
            return new ResponseEntity("incorrect password", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>("success", HttpStatus.ACCEPTED);
    }
    @GetMapping("/users")
    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @PutMapping("/users/{userId}")
    public User updateUser(@PathVariable Long userId, @Valid @RequestBody User userRequest) {
        return userRepository.findById(userId).map(user -> {
            user.setUsername(userRequest.getUsername());
            return userRepository.save(user);
        }).orElseThrow(() -> new ResourceNotFoundException("UserId " + userId + " not found"));
    }


    @DeleteMapping("/users/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        return userRepository.findById(userId).map(user -> {
            user.setDeleted(true);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("UserId " + userId + " not found"));
    }
}
