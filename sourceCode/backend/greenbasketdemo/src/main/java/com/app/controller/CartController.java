package com.app.controller;

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

import com.app.dao.CustomerRepository;
import com.app.pojos.Cart;
import com.app.pojos.Customer;
import com.app.service.ICartService;
import com.app.service.ICustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cart")
	
public class CartController {
	
	@Autowired
	ICartService cartService;
	
	@Autowired
	ICustomerService customerService;
	
	@Autowired
	CustomerRepository customerRepo;
	
	public	CartController(){
		 System.out.println("in constr of "+getClass().getName());
	}
	@GetMapping
	public ResponseEntity<?> getCustomerCart(@RequestParam Long custID) {
		Cart cart = cartService.getCutomersCart(custID);
		if(cart == null)
			return new ResponseEntity<>(new String("Cart is Empty"),HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<>(cart,HttpStatus.CREATED);
	}
	@PostMapping("/addproduct")
	public ResponseEntity<?> addProductToCart(@RequestParam Long productid, @RequestParam double quantity,@RequestParam Long custID) {
		
		Cart cart =cartService.updateExistingCart(productid, quantity, custID);
		if(cart == null)
			return new ResponseEntity<>(new String("Cart Creation Failed"),HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<>(new String("Cart created"),HttpStatus.CREATED);
	}
	
	@PutMapping("/updateCart")
	public ResponseEntity<?> updateCart(@RequestParam Long productid, @RequestParam double quantity,@RequestParam Long custID) {
		if(cartService.updateExistingCart(productid, quantity,custID) == null)
			return new ResponseEntity<>(new String("Cart updation Failed"),HttpStatus.FAILED_DEPENDENCY);
		else
			return new ResponseEntity<>(new String("Cart updated"),HttpStatus.OK);
	}
	
	@PostMapping("/deleteproduct")
	public ResponseEntity<?> deleteProductFromCart(@RequestParam Long productid,@RequestParam Long custID) {
		if(!cartService.deleteFormExistingCard(productid,custID))
			return new ResponseEntity<>(new String("Cart deletion Failed"),HttpStatus.FAILED_DEPENDENCY);
		else
			return new ResponseEntity<>(new String("Cart deleted"),HttpStatus.CREATED);
	}
}
