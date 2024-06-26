package com.springboot.bookstore.repository;

import com.springboot.bookstore.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;
import java.util.Optional;

public interface AddressRepository extends JpaRepository<Address, Integer> {
    //    List<Address> findAllBy
    Optional<Address> findById(int id);
}
