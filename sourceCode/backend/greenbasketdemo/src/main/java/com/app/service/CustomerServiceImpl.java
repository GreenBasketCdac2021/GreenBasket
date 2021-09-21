package com.app.service;

//import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
//import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.stereotype.Service;

import com.app.dao.CustomerRepository;
//import com.app.custom_exceptions.UserHandlingException;
import com.app.dao.UserRepository;
import com.app.pojos.Customer;
import com.app.pojos.User;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {
	// dependency of Dao layer
	@Autowired
	private CustomerRepository customerRepo;

	@Override
	public Customer validateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		Customer u = new Customer();
		u.setEmail(customer.getEmail());
		u.setPassword(customer.getPassword());
		Example<Customer> examplecustomer = Example.of(u);
		Optional<Customer> opt = customerRepo.findOne(examplecustomer);

		if (opt.isPresent()) {
			return opt.get();
		} else {
			return null;
		}
	}

	@Override
	public Customer registerCustomer(Customer customer) {
		return customerRepo.save(customer);
		}
		/*
		 * String tempEmaiId = user.getEmail(); if (tempEmaiId != null &&
		 * !"".equals(tempEmaiId)) { User obj = userRepo.findByEmail(tempEmaiId); if
		 * (obj != null) { throw new Exception("User with emailId" + tempEmaiId +
		 * " already exist"); } } User tempUser = null; tempUser = userRepo.save(user);
		 * return tempUser; }
		 */
		  public Customer fetchCustomerByEmailId(String emailId) { 
			  return customerRepo.findByEmail(emailId);
		 }

	/*
	 * @Override public List<User> fetchAllUsers() {
	 * 
	 * return userRepo.findAll(); //to list all the users }
	 * 
	 * @Override public User saveUserDetails(User transientUser) { // TODO
	 * Auto-generated method stub return userRepo.save(transientUser); }
	 * 
	 * @Override public String deleteUserDetails(int UserId) {
	 * userRepo.deleteById(UserId); return "User Details Deleted"; }
	 * 
	 * @Override public User getUserDetails(int userId) { return
	 * userRepo.findById(userId).orElseThrow(() ->new
	 * UserHandlingException("Invalid User Id"));
	 * 
	 * }
	 * 
	 * @Override public User updateUserDetails(User detachedUser) { //edit and
	 * update user details return userRepo.save(detachedUser); }
	 */
}
