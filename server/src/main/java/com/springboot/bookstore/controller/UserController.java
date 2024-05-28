package com.springboot.bookstore.controller;

import com.springboot.bookstore.entity.User;
import com.springboot.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    private UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/find-by-username")
    public ResponseEntity<?> findByUsername(@RequestParam String username) {
        User user = userService.findByUserName(username);
        return ResponseEntity.ok("Find access");
    }
    @GetMapping("")
    public Page<User> findAll(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir) {
        return userService.findAll(page,size,sortBy,sortDir);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable int id) {
        return ResponseEntity.ok(userService.findById(id));

    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }
//    public Page<User> getAll(
//            @RequestParam(defaultValue = "1") int page,
//            @RequestParam(defaultValue = "5") int perPage,
//            @RequestParam(defaultValue = "id") String sort,
//            @RequestParam(defaultValue = "asc") String order,
//            @RequestParam(defaultValue = "") String filter
//    ) {
//        return userService.findAll(page, perPage, sort, order, filter);
//    }

}
