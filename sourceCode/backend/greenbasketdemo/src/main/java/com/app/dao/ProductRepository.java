package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ProductDetails;


public interface ProductRepository extends JpaRepository<ProductDetails, Integer> {
	
	


}
