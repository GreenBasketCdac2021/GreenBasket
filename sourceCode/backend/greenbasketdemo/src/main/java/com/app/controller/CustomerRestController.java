package com.app.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.CustomerRepository;
import com.app.pojos.Customer;
import com.app.service.ICustomerService;
import com.app.service.IMailService;
import com.app.service.MailServiceImp;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customer")
public class CustomerRestController {
	public	CustomerRestController(){
		System.out.println("in constr of "+getClass().getName());
	}

	@Autowired
	ICustomerService customerService;
	CustomerRepository customerRepo;
	@Autowired
	IMailService mailService;

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
		customer.setReg_date(LocalDate.now());
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
	@PostMapping("/emailPassword")
	public ResponseEntity<?> registerNewUser(@RequestParam String email){
		Customer obj = customerService.fetchCustomerByEmailId(email);
		String message = "Hi this is your password: "+obj.getPassword();
		if(obj != null) {
			new MailServiceImp().sendMail(obj.getEmail(),"GreenBasket Password",message);
			return new ResponseEntity<String>("password mail sent",HttpStatus.OK);
		}
		return new ResponseEntity<String>("user not found",HttpStatus.OK);
	}
	
//	@PostMapping("/sendotp")
//	public ResponseEntity<?> sendOtp(@RequestParam String email){
//		Customer customer = customerService.fetchCustomerByEmailId(email);
//		String body = "Hi "+customer.getFName()+",\n your OTP is "+customer.getId()+". \n\n Thanks, \n green Basket";
//		if(customer != null) {
//			mailService.sendMail(customer.getEmail(), "OTP from green basket", body);
//			return new ResponseEntity<String>("user found and mail sent",HttpStatus.OK);
//		} else{
//			return new ResponseEntity<String>("user Not found",HttpStatus.OK);
//		}
		
	//} 
	  
//	}
//	
//	@PostMapping("/changepass")
//	public ResponseEntity<?> changepass(@RequestParam String email,@RequestParam String password){
//		Customer customer = customerService.fetchCustomerByEmailId(email);
//		String body = "Hi "+customer.getFName()+",\n your OTP is "+customer.getId()+". \n\n Thanks, \n green Basket";
//		if(customer != null) {
//			mailService.sendMail(customer.getEmail(), "OTP from green basket", body);
//			return new ResponseEntity<String>("user found and mail sent",HttpStatus.OK);
//		} else{
//			return new ResponseEntity<String>("user Not found",HttpStatus.OK);
//		}
	
	
}
