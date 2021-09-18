package com.app.service;

import com.app.pojos.User;

public interface IUserService {
	//method to validate user
	public User validateUser(User user);
	
	//method to register user
	public User registerUser(User user);

	public User fetchUserByEmailId(String tempEmaiId); 
	
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
