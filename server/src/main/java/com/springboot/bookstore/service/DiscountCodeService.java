package com.springboot.bookstore.service;

import com.springboot.bookstore.entity.Category;
import com.springboot.bookstore.entity.DiscountCode;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

public interface DiscountCodeService {
    ResponseEntity<?> checkDiscountCode(String code);

    Page<DiscountCode> findAll(int page , int size, String sortBy, String sortDir, String filter);
    DiscountCode findById(int id);
    DiscountCode findByCode(String code);
    void deleteDiscountCode(int id);
    DiscountCode createDiscountCode(DiscountCode discountCode);
    DiscountCode updateDiscountCode(int id, DiscountCode discountCode);

}
