package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.PaymentMethod;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long> {

}
