package com.app.service;

import java.util.List;

import com.app.pojos.Category;
import com.app.pojos.Customer;
import com.app.pojos.ProductDetails;
import com.app.pojos.User;

public interface IUserService {
	// method to validate user
	public User validateUser(User user);

	// method to register user
	public User registerUser(User user);

	public User fetchUserByEmailId(String tempEmaiId);

//----------------------------------------------------------------------------------------------------//
	//doing all bt admin
	 //method to fetch- list all customers 
	List<Customer> fetchAllCustomers();

	// method to get customer by Id
	Customer getCustomerById(long customerId);
	
//-----------------------------------------------------------------------------------------------------------//
	
	
	//All about product
	
	// method to fetch all products
	List<ProductDetails> fetchAllProducts();
	
	// method to add new product
	ProductDetails addNewProduct(ProductDetails product);
		
		//add method to get by id
		ProductDetails getProductById(long productId);
		
	
	//method to add update product by id
	ProductDetails updateProduct(ProductDetails product);
	
	//method to delete product by id
	String deleteProductById(long productId);
	
	//add a method to list all category
	List<User> getProductByCategory(String categoryName);
	
	
	
	
	
	
	
//	 //method to save user details 
//	User saveUserDetails(User transientUser);
//	  
//	  // add a method to delete user details by Id 
//	String deleteUserDetails(long UserId);
//	  
//	  //add method to fetch user details by id 
//	User getUserDetails(long userId);
//	  
//	  //add method to update the existing user details 
//	User updateUserDetails(User
//	  detachedUser);
	 
}
