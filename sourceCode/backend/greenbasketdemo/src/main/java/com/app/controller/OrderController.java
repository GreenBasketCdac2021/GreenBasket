package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.OrderRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Customer;
import com.app.pojos.Orders;
import com.app.pojos.User;
import com.app.pojos.UserRole;
import com.app.service.ICustomerService;
import com.app.service.IMailService;
import com.app.service.IOrderService;
import com.app.service.IUserService;
import com.app.service.MailServiceImp;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/order")
	
public class OrderController {
	
	@Autowired
	IOrderService orderService;
	
	@Autowired
	ICustomerService customerService;
	
	@Autowired
	IMailService mailService;
	
	@Autowired
	IUserService userService;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	OrderRepository orderRepo;
	
	public	OrderController(){
		 System.out.println("in constr of "+getClass().getName());
	}
	
	@PostMapping("/placeorder")
	public ResponseEntity<?> placeOrder(@RequestParam Long customerId, @RequestParam Long paymentMethodId,@RequestParam String email){
		Customer customer = customerService.fetchCustomerByEmailId(email);
		User user = userService.fetchUserByRole(UserRole.DELIVERYBOY);
		String message ="Hi "+customer.getfName()+ ", <br> Your order is Confirmed on "+java.time.LocalDateTime.now()+" and Out for delivery. Delivery boy name:"+user.getfName();
		if(orderService.placeOrder(customerId,paymentMethodId)) {
			new MailServiceImp().sendMail(customer.getEmail(),"GreenBasket_OrderConfirmation",message);
			return new ResponseEntity<String>("Order Placed",HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Failed to add order",HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@GetMapping("/getorderbycustomerid")
	public ResponseEntity<?> getOrderByCustomerId(@RequestParam Long customerId){
		List<Orders> order = orderService.getOrderByCustomerID(customerId);
		if(order != null) {
			return new ResponseEntity<List<Orders>>(order,HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Order Not found",HttpStatus.EXPECTATION_FAILED);
		}
	}

	
//	 @PostMapping("/sendOrderMail")
//	public ResponseEntity<?> sendOrderMail(@RequestParam String email, @RequestParam Long custId ){
//		Customer customer = customerService.fetchCustomerByEmailId(email);
//     	String body = "Hi "+customer.getFName()+",\n your Order is confirmed. \n\n Thanks, \n Green Basket";
//	if(customer != null) {
//			mailService.sendMail(customer.getEmail(), " from green basket", body);
//		return new ResponseEntity<String>("user found and mail sent",HttpStatus.OK);
//		} else{
//			return new ResponseEntity<String>("user Not found",HttpStatus.OK);
//		}
//		
//	} 
	
}
