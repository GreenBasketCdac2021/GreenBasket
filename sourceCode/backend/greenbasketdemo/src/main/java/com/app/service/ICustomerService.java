package com.app.service;

import java.util.Optional;

import com.app.pojos.Customer;
import com.app.pojos.ProductDetails;

public interface ICustomerService {
	//method to validate user
	public Customer validateCustomer(Customer customer);
	
	//method to register user
	public Customer registerCustomer(Customer customer);

	public Customer fetchCustomerByEmailId(String tempEmaiId); 
	
	//method to add update customer
	//public Customer updateCustomer(Customer newcustomer, Long CustId);
	
	
}
