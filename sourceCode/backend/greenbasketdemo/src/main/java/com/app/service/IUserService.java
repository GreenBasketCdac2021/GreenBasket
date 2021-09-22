package com.app.service;

import java.util.List;

import com.app.pojos.Customer;
import com.app.pojos.ProductDetails;
import com.app.pojos.User;

public interface IUserService {
	// method to validate user
	public User validateUser(User user);

	// method to register user
	public User registerUser(User user);

	public User fetchUserByEmailId(String tempEmaiId);

	
	 //method to fetch- list all customers 
	List<Customer> fetchAllCustomers();

	// method to get customer by Id
	Customer getCustomerById(int customerId);
	
	// method to add new product
	ProductDetails addNewProduct(ProductDetails product);
	
	
	
	
	
//	 //method to save user details 
//	User saveUserDetails(User transientUser);
//	  
//	  // add a method to delete user details by Id 
//	String deleteUserDetails(int UserId);
//	  
//	  //add method to fetch user details by id 
//	User getUserDetails(int userId);
//	  
//	  //add method to update the existing user details 
//	User updateUserDetails(User
//	  detachedUser);
	 
}
