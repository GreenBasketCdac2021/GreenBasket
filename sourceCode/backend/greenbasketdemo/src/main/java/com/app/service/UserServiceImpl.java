package com.app.service;

//import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
//import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.stereotype.Service;

//import com.app.custom_exceptions.UserHandlingException;
import com.app.dao.UserRepository;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	// dependency of Dao layer
	@Autowired
	private UserRepository userRepo;

	@Override
	public User validateUser(User user) {
		// TODO Auto-generated method stub
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
		/*
		 * String tempEmaiId = user.getEmail(); if (tempEmaiId != null &&
		 * !"".equals(tempEmaiId)) { User obj = userRepo.findByEmail(tempEmaiId); if
		 * (obj != null) { throw new Exception("User with emailId" + tempEmaiId +
		 * " already exist"); } } User tempUser = null; tempUser = userRepo.save(user);
		 * return tempUser; }
		 */
		  public User fetchUserByEmailId(String emailId) { 
			  return userRepo.findByEmail(emailId);
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
