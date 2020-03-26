package com.pfa.clubisti.controller;

import com.pfa.clubisti.exception.ResourceNotFoundException;
import com.pfa.clubisti.model.Role;
import com.pfa.clubisti.model.RoleName;
import com.pfa.clubisti.model.User;
import com.pfa.clubisti.DTOs.requests.GrantAdminPrivilegesRequest;
import com.pfa.clubisti.DTOs.requests.SignUpForm;
import com.pfa.clubisti.DTOs.response.ResponseMessage;
import com.pfa.clubisti.repository.RoleRepository;
import com.pfa.clubisti.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

import static com.pfa.clubisti.model.RoleName.ROLE_ADMIN;
import static com.pfa.clubisti.model.RoleName.ROLE_USER;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

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
    @GetMapping("/users")
    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @GetMapping("/users/{userId}")
    public User getUser(@PathVariable Long userId) {
        return userRepository.findById(userId).get();
    }
    @PutMapping("/users/{userId}")
    public User updateUser(@PathVariable Long userId, @Valid @RequestBody User userRequest) {
        return userRepository.findById(userId).map(user -> {
            user.setUsername(userRequest.getUsername());
            return userRepository.save(user);
        }).orElseThrow(() -> new ResourceNotFoundException("UserId " + userId + " not found"));
    }

    @PostMapping("/users/admin")
    public ResponseEntity<?> createAdmin(@Valid @RequestBody SignUpForm signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(), signUpRequest.getUsername(),
                encoder.encode(signUpRequest.getPassword()));


        Set<Role> roles = new HashSet<>();


        Role userRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Admin Role not find."));
        roles.add(userRole);


        user.setRoles(roles);
        userRepository.save(user);

        return new ResponseEntity<>(new ResponseMessage("Administrator created successfully!"), HttpStatus.OK);
    }

    @PutMapping("/users/admin/{userId}")
    public ResponseEntity<?> upgradeUserToAdmin(@PathVariable Long userId, @Valid @RequestBody GrantAdminPrivilegesRequest grantAdminPrivilegesRequest) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
        Role userRole;
        RoleName actualRole = ROLE_USER;
        for (Role role: user.getRoles()
        ) {
            if (role.getName() == ROLE_ADMIN) {
                actualRole = ROLE_ADMIN;
                break;
            }
        }
        if(grantAdminPrivilegesRequest.isUpgrade() && actualRole == ROLE_USER) {
            userRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
                    .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Admin Role not find."));
        } else if(grantAdminPrivilegesRequest.isUpgrade() && actualRole == ROLE_ADMIN) {
            return new ResponseEntity<>(new ResponseMessage("Fail! -> User is already an admin"),
                    HttpStatus.BAD_REQUEST);
        } else if(!grantAdminPrivilegesRequest.isUpgrade() && actualRole == ROLE_USER) {
            return new ResponseEntity<>(new ResponseMessage("Fail! -> User already isn't granted admin privileges"),
                    HttpStatus.BAD_REQUEST);
        } else {
            userRole = roleRepository.findByName(ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
        }
        Set<Role> roles = new HashSet<>();
        roles.add(userRole);
        user.setRoles(roles);
        userRepository.save(user);

        if(grantAdminPrivilegesRequest.isUpgrade()) {
            return new ResponseEntity<>(new ResponseMessage("User granted administrator privileges successfully!"), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseMessage("User denied administrator privileges successfully!"), HttpStatus.OK);
        }
    }

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        return userRepository.findById(userId).map(user -> {
            user.setDeleted(true);
            userRepository.save(user);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("UserId " + userId + " not found"));
    }
}
