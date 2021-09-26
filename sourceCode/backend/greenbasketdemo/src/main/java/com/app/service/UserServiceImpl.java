package com.app.service;

import java.util.List;
//import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
//import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ProductHandlingException;
import com.app.custom_exceptions.UserHandlingException;
import com.app.dao.CustomerRepository;
import com.app.dao.ProductRepository;
//import com.app.custom_exceptions.UserHandlingException;
import com.app.dao.UserRepository;
import com.app.pojos.Category;
import com.app.pojos.Customer;
import com.app.pojos.ProductDetails;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	// dependency of Dao layer
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private CustomerRepository customerRepo;
	
	@Autowired
	private ProductRepository productRepo;
	
	

	@Override
	public User validateUser(User user) {
		User u = new User();
		u.setEmail(user.getEmail());
		u.setPassword(user.getPassword());
		Example<User> exampleUser = Example.of(u);
		Optional<User> opt = userRepo.findOne(exampleUser);

		if (opt.isPresent()) {
			return opt.get();
		} else {
			return null;
		}
	}

	@Override
	public User registerUser(User user) {
		return userRepo.save(user);
		}
		
	public User fetchUserByEmailId(String emailId) { 
		return userRepo.findByEmail(emailId);
		 }

	// CRUD Operations performed by admin 
	
	// method to fetch list of all customers
		@Override
		public List<Customer> fetchAllCustomers() {
			return customerRepo.findAll();
		}
		
		// method to get customer by Id
		@Override
		public Customer getCustomerById(long customerId) { 
			return customerRepo.findById(customerId).orElseThrow(() ->new UserHandlingException("Invalid Customer Id"));
		}
		
		@Override
		public List<ProductDetails> fetchAllProducts() {
			return productRepo.findAll();
		}
		
		@Override
		public ProductDetails addNewProduct(ProductDetails product) {
			return productRepo.save(product);
		}
	
		
		@Override
		public ProductDetails getProductById(long productId) {
			
			return productRepo.findById(productId).orElseThrow(() ->new ProductHandlingException("Invalid product Id"));
		}
		
		@Override
		public ProductDetails updateProduct(ProductDetails product) {
			// TODO Auto-generated method stub
			return productRepo.save(product);
		}
		
		

		@Override
		public String deleteProductById(long productId) {
			
			productRepo.deleteById(productId);
			return "Product deleted succesfully";
		}
		
		@Override
		public List<User> getProductByCategory(String categoryName) {
			// TODO Auto-generated method stub
			return null;
		}

		
				
}
