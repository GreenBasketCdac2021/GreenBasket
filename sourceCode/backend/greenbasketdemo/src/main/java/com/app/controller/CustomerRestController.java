package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Customer;
import com.app.pojos.User;
import com.app.service.ICustomerService;
import com.app.service.IUserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customer")
public class CustomerRestController {
	public	CustomerRestController(){
		 System.out.println("in constr of "+getClass().getName());
	}
	 
	@Autowired
	ICustomerService customerService;
	
	@PostMapping("/login")
	public ResponseEntity<?> checkUser(@RequestBody Customer customer){
		Customer u=customerService.validateCustomer(customer);
		if(u!=null) {
			return new ResponseEntity<Customer>(u,HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("{invalid credentials}",HttpStatus.OK);
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerNewUser(@RequestBody Customer customer){
		String tempEmailId = customer.getEmail(); 
		if (tempEmailId != null && !"".equals(tempEmailId)) { 
			Customer obj = customerService.fetchCustomerByEmailId(tempEmailId);
			if(obj != null) { 
				return new ResponseEntity<String>("User with emailId" + tempEmailId +" already exist",HttpStatus.OK); 
				} 
			} 
		Customer tempUser = null; 
		tempUser =customerService.registerCustomer(customer);
			  return new ResponseEntity<String>("user created successfully",HttpStatus.OK);
			 }	
	}