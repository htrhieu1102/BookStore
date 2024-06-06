//package com.springboot.bookstore.entity;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import lombok.ToString;
//
//@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@ToString
//@Table(name = "Order")
//public class Order {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id", nullable = false)
//    private int id;
//
//    @Column(name = "firstname")
//    private String firstname;
//
//    @Column(name = "lastname")
//    private String lastname;
//
//    @Column(name = "email")
//    private String email;
//
//    @Column(name = "phone")
//    private String phone;
//
//    @Column(name = "address")
//    private String address;
//
//    @Column(name = "zipcode")
//    private String zipcode;
//
//    @Column(name = "province")
//    private String province;
//
//    @Column(name = "note")
//    private String note;
//
//     @Column(name = "payment_method")
//     private String payment_method;
//
//     @Column(name = "payment_status")
//     private int payment_status;
//
//     @Column(name = "total_amount")
//     private double total_amount;
//
////     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
////     @OneToOne(fetch = FetchType.LAZY)
////     @JoinColumn(name = "discount_code_id", referencedColumnName = "id", nullable = false)
////     private DiscountCode discountCode;
////
////     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
////     @OneToOne(fetch = FetchType.LAZY)
////     @JoinColumn(name = "delivery_status_id", referencedColumnName = "id", nullable = false)
////     private DeliveryStatus deliveryStatus;
////
////     @Column(name = "shipping_cost")
////     private double shipping_cost;
////
////     @Column(name = "created_at")
////     private String created_at;
////
////     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
////     @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
////     private List<OrderDetails> orderDetails;
//}