package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;
import com.app.pojos.UserRole;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);
	public User findByRole(UserRole role);
	
	
}

