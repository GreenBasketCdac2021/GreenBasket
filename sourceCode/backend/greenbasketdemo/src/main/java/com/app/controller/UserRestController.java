package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceAlreadyExists;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.custom_exceptions.UnauthorizedException;
import com.app.pojos.Category;
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

			throw new UnauthorizedException("Login Failed due to Invalid Credentials");
		}
	}

	@PostMapping("/register")
	public ResponseEntity<?> registerNewUser(@RequestBody User user) {
		String tempEmailId = user.getEmail();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			User obj = userService.fetchUserByEmailId(tempEmailId);
			if (obj != null) {
				throw new ResourceAlreadyExists("User with emailId " + tempEmailId +" already exist");
			}
		}
		User tempUser = null;
		tempUser = userService.registerUser(user);
		return new ResponseEntity<String>("user created successfully", HttpStatus.OK);
	}
	
	@GetMapping("/customer")
	public List<Customer> getAllCustomers(){
		return userService.fetchAllCustomers();
	}
	
	@GetMapping("/customer/{customerId}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable long customerId){
		Customer customer=userService.getCustomerById(customerId);
		if(customer==null) {
			throw new ResourceNotFoundException("Product Not Found...!");
		}else
		{
			return new ResponseEntity<>(customer,HttpStatus.OK);
		}
	}
	
	@GetMapping("/product")
	public List<ProductDetails> getAllProducts(){
		return userService.fetchAllProducts();
	}
	
	@PostMapping("/product")
	public ResponseEntity<?> addProduct(@RequestBody ProductDetails product){
		ProductDetails addProduct=userService.addNewProduct(product);
		if(addProduct==null) {
			throw new ResourceAlreadyExists("Product Already Existed...!");
		}else
		{
			return new ResponseEntity<>(addProduct,HttpStatus.CREATED);
		}
	}
	
	@GetMapping("/product/{productId}")
	public ResponseEntity<ProductDetails> getProductById(@PathVariable long productId){
		ProductDetails product=userService.getProductById(productId);
		if(product==null) {
			throw new ResourceNotFoundException("Product Not Found...!");
		}else
		{
			return new ResponseEntity<>(product,HttpStatus.OK);
		}
	}
	
	@PutMapping("/updateProduct")
	public ResponseEntity<?> updateProduct(@RequestBody ProductDetails product) {
		ProductDetails updateProduct=userService.updateProduct(product);
		if(updateProduct==null) {
			throw new ResourceAlreadyExists("Updating Product Failed...!");
		}else
		{
			return new ResponseEntity<>(updateProduct,HttpStatus.OK);
		}
	}
	
	@DeleteMapping("/deleteProduct/{ppid}")
	public ResponseEntity<?> deleteProductById(@PathVariable long ppid){
		//
         ProductDetails product=userService.getProductById(ppid);
		
		if(product==null) {
			
			throw new ResourceAlreadyExists("Deleting Product Failed...!");
		}else
		{
			return ResponseEntity.ok(userService.deleteProductById(ppid));
		}
	}
	
	
}