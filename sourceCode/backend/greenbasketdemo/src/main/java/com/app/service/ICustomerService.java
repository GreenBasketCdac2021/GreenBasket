package com.app.service;

import com.app.pojos.Customer;

public interface ICustomerService {
	//method to validate user
	public Customer validateCustomer(Customer customer);
	
	//method to register user
	public Customer registerCustomer(Customer customer);

	public Customer fetchCustomerByEmailId(String tempEmaiId); 
	
	/*
	 * //method to fetch- list all users List<User> fetchAllUsers();
	 * 
	 * //method to save user details User saveUserDetails(User transientUser);
	 * 
	 * // add a method to delete user details by Id String deleteUserDetails(int
	 * UserId);
	 * 
	 * //add method to fetch user details by id User getUserDetails(int userId);
	 * 
	 * //add method to update the existing user details User updateUserDetails(User
	 * detachedUser);
	 */
}
