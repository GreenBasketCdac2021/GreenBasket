package com.app.dao;

import java.util.List;
import java.util.Locale.Category;
import java.util.Arrays;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.ProductDetails;
import com.app.pojos.User;

@SpringBootTest
class UserDaoTests {
	@Autowired
	private ProductRepository productRepo;

	@Test
	void testAddProduct() {
		//ProductDetails product=new ProductDetails("Kiwi",10,120.0,"Sweettaste",Category.valueOf("Fruits"));
//		List<ProductDetails> product=Arrays.asList(new ProductDetails("Kiwi",10,120.0,"Sweettaste",)
		//productRepo.save(product) ;
	}

}
