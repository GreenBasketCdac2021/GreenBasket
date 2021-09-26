package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Customer;
import com.app.pojos.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long>{
	
	@Query("SELECT o FROM Orders o WHERE o.customerDetails.id = ?1")
	public List<Orders> findByCustomerID(Long customerId);
}


