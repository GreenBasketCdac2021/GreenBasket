package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.CartItems;

public interface CartItemRepository extends JpaRepository<CartItems, Long> {

	@Query("SELECT c FROM CartItems c WHERE c.cart.id = ?1")
	public List<CartItems>findAllByCartId(Long cartId);
}
