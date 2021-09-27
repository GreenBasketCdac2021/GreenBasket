package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
	@Query("SELECT c FROM Customer c WHERE c.email = ?1")
	public Customer findByEmail(String email);
}
