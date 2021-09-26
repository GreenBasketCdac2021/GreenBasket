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
		
		  public Customer fetchCustomerByEmailId(String emailId) { 
			  return customerRepo.findByEmail(emailId);
		 }

//		@Override
//		public Customer updateCustomer(Customer newcustomer, Long custId) {
//			return customerRepo.findById(custId).map(customer -> 
//			try{{
//				customer.setFName(newcustomer.getFName());
//				customer.setLastName(newcustomer.getLastName());
//				customer.setEmail(newcustomer.getEmail());
//				customer.setPassword(newcustomer.getPassword());
//				customer.setPhone(newcustomer.getPhone());
//				customer.setAddress(newcustomer.getAddress());
//				customerRepo.save(customer);
//				return customer;
//			}}catch (Exception e) {
//				// TODO: handle exception
//			})
//			}
										
		}


