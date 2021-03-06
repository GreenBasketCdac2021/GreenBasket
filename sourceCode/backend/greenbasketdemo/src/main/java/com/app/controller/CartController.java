package com.app.controller;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.CustomException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.pojos.Cart;
import com.app.pojos.CartItems;
import com.app.pojos.Customer;
import com.app.pojos.Orders;
import com.app.service.ICartService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/cart")
	
public class CartController {
	
	@Autowired
	ICartService cartService;
	
	public	CartController(){
		 System.out.println("in constr of "+getClass().getName());
	}
	
	@PostMapping("/addproduct")
	public ResponseEntity<?> addProductToCart(@RequestParam(value="productid") Long productid, @RequestParam(value="quantity") double quantity,@RequestParam(value="custID") Long custID) {
		Cart cart = cartService.updateExistingCart(productid, quantity,custID);
		if(cart == null)
			throw new CustomException("Adding Product/Cart Creation Failed...!");
		else
			return new ResponseEntity<>(new String("Cart created"),HttpStatus.CREATED);
	}
	
	@PutMapping("/updateCart")
	public ResponseEntity<?> updateCart(@RequestParam Long productid, @RequestParam double quantity,@RequestParam Long custID) {
		if(cartService.updateExistingCart(productid, quantity,custID) == null)
			throw new CustomException("Updating Product Quantity Failed...!");
		else
			return new ResponseEntity<>(new String("Cart updated"),HttpStatus.OK);
	}
	
	@PostMapping("/deleteproduct")
	public ResponseEntity<?> deleteProductFromCart(@RequestParam Long productid,@RequestParam Long custID) {
		if(!cartService.deleteFormExistingCard(productid, custID))
			throw new CustomException("Deleting Product from Cart Failed...!");
		else
			return new ResponseEntity<>(new String("Cart deleted"),HttpStatus.CREATED);
	}
	
	
	@GetMapping("/getcartbycustomerid")
	public ResponseEntity<?> getCartByCustomerId(@RequestParam Long customerId){
		Cart cart = cartService.getCutomersCart(customerId);
		if(cart != null) {
			List<CartItems> items =cart.getCartItems(); 
			return new ResponseEntity<>(items,HttpStatus.OK);
		}else {
			throw new ResourceNotFoundException("Cart Not Found");
		}
	
	}
}


