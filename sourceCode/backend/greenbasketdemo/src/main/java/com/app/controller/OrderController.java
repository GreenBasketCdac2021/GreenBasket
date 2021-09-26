package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Cart;
import com.app.pojos.Customer;
import com.app.pojos.Orders;
import com.app.service.ICartService;
import com.app.service.IOrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/order")
	
public class OrderController {
	
	@Autowired
	IOrderService orderService;
	
	public	OrderController(){
		 System.out.println("in constr of "+getClass().getName());
	}
	
	@PostMapping("/placeorder")
	public ResponseEntity<?> placeOrder(@RequestParam Long customerId, @RequestParam Long paymentMethodId){
		
		if(orderService.getOrderByCustomerID(customerId) != null) {
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

	
}
