package com.app.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.ProductDetails;
import com.app.pojos.User;
@SpringBootTest
public class UserServiceTests {
	
		@Autowired
		private IUserService userService;
		
//		@Test
//		public void testAddAllProducts() {
//			ProductDetails product= userService.addNewProduct(product);
//			assertEquals(1, product);
//		}
}
