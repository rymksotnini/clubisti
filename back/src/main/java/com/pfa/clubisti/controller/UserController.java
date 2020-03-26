package com.pfa.clubisti.controller;

import com.pfa.clubisti.DTOs.UserDTO;
import com.pfa.clubisti.exception.ResourceNotFoundException;
import com.pfa.clubisti.model.Role;
import com.pfa.clubisti.model.User;
import com.pfa.clubisti.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

import static com.pfa.clubisti.model.RoleName.ROLE_USER;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController("/users")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /*@PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User newUser) {
        if (userRepository.findOneByEmail(newUser.getEmail()) != null) {
            System.out.println("username Already exist " + newUser.getEmail());
            return new ResponseEntity("user with email " + newUser.getUsername() + "already exist ", HttpStatus.CONFLICT);
        }
        Role role = new Role();
        role.setName(ROLE_USER);
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        newUser.setRoles(roles);
        return new ResponseEntity<>(userRepository.save(newUser), HttpStatus.CREATED);
    }

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<UserDTO> login(@RequestBody User user) {
        System.out.println("user email: " + user.getEmail());
        User retrievedUser = userRepository.findOneByEmail(user.getEmail());
        if (retrievedUser == null) {
            return new ResponseEntity("user with email " + user.getEmail() + "doesn't exist ", HttpStatus.CONFLICT);
        }

        if (retrievedUser.getPassword().compareTo(user.getPassword()) != 0) {
            return new ResponseEntity("incorrect password", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(retrievedUser.createUserDTO(), HttpStatus.ACCEPTED);
    }*/
    @GetMapping("/")
    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable String userId) {
        System.out.println("user ID "+userId.split("user")[1]);
        return userRepository.findById(Long.parseLong(userId.split("user")[1])).get();
    }
    @PutMapping("/{userId}")
    public User updateUser(@PathVariable Long userId, @Valid @RequestBody User userRequest) {
        return userRepository.findById(userId).map(user -> {
            user.setUsername(userRequest.getUsername());
            return userRepository.save(user);
        }).orElseThrow(() -> new ResourceNotFoundException("UserId " + userId + " not found"));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        return userRepository.findById(userId).map(user -> {
            user.setDeleted(true);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("UserId " + userId + " not found"));
    }
}
