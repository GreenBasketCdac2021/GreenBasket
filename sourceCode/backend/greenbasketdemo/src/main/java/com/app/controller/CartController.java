package com.app.controller;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> cd632fbd3f3bfc6e29ed0d9c2c27433083ef3abc
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Cart;
<<<<<<< HEAD
=======
import com.app.pojos.CartItems;
>>>>>>> cd632fbd3f3bfc6e29ed0d9c2c27433083ef3abc
import com.app.service.ICartService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cart")
	
public class CartController {
	
	@Autowired
	ICartService cartService;
	
	public	CartController(){
		 System.out.println("in constr of "+getClass().getName());
	}
	
	@PostMapping("/addproduct")
	public ResponseEntity<?> addProductToCart(@RequestParam Long productid, @RequestParam double quantity,@RequestParam Long custID) {
		Cart cart = cartService.addCartAndProductFirstTime(productid, quantity,custID);
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
	public ResponseEntity<?> deleteProductFromCart(@RequestParam Long productid, @RequestParam double quantity,@RequestParam Long custID) {
		if(!cartService.deleteFormExistingCard(productid, quantity,custID))
			return new ResponseEntity<>(new String("Cart deletion Failed"),HttpStatus.FAILED_DEPENDENCY);
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
			return new ResponseEntity<String>("Cart Not found",HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
	
}
