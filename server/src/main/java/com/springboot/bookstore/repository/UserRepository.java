package com.springboot.bookstore.repository;

import com.springboot.bookstore.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findById(int id);
    Optional<User> findByUsername(String username);
    Boolean existsUserByUsername(String username);
    Page<User> findAll(Pageable pageable);
    Page<User> findAll(Specification<User> specification, Pageable pageable);
}
