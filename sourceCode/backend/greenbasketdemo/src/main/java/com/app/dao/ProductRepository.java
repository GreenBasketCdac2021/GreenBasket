package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Category;
import com.app.pojos.ProductDetails;


public interface ProductRepository extends JpaRepository<ProductDetails, Integer> {
	
	//public List<ProductDetails> findByCategory(String);

}
