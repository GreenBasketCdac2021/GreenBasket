package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Customer;
import com.app.pojos.ProductDetails;
import com.app.pojos.User;
import com.app.service.ICustomerService;
import com.app.service.IUserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserRestController {
	public UserRestController() {
		System.out.println("in constr of " + getClass().getName());
	}

	@Autowired
	IUserService userService;
	
	@Autowired
	ICustomerService customerService;


	@PostMapping("/admin/login")

	public ResponseEntity<?> checkUser(@RequestBody User user) {
		User u = userService.validateUser(user);
		if (u != null) {
			return new ResponseEntity<User>(u, HttpStatus.OK);
		} else {

			return new ResponseEntity<String>("invalid credentials", HttpStatus.OK);
		}
	}

	@PostMapping("/register")
	public ResponseEntity<?> registerNewUser(@RequestBody User user) {
		String tempEmaiId = user.getEmail();
		if (tempEmaiId != null && !"".equals(tempEmaiId)) {
			User obj = userService.fetchUserByEmailId(tempEmaiId);
			if (obj != null) {
				return new ResponseEntity<String>("User with emailId " + tempEmaiId + " already exist", HttpStatus.OK);
			}
		}
		User tempUser = null;
		tempUser = userService.registerUser(user);
		return new ResponseEntity<String>("user created successfully", HttpStatus.OK);
	}
	
	@GetMapping
	public List<Customer> getAllCustomers(){
		return userService.fetchAllCustomers();
	}
	
	@GetMapping("/{customerId}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable int customerId){
		return ResponseEntity.ok(userService.getCustomerById(customerId));
	}
	
	@GetMapping("/product")
	public List<ProductDetails> getAllProducts(){
		return userService.fetchAllProducts();
	}
	
	@PostMapping("/product")
	public ResponseEntity<?> addProduct(@RequestBody ProductDetails product){
		return new ResponseEntity<>(userService.addNewProduct(product),HttpStatus.CREATED);
	}
}