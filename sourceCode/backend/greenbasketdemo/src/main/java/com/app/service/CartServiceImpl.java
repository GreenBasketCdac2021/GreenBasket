package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.CategoryRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Cart;
import com.app.pojos.CartItems;
import com.app.pojos.Customer;
import com.app.pojos.ProductDetails;

@Service
@Transactional
public class CartServiceImpl implements ICartService {

	@Autowired
	UserRepository userRepo;

	@Autowired
	ProductRepository productRepo;

	@Autowired
	CustomerRepository customerRepo;

	@Autowired
	CategoryRepository categoryRepo;

	@Autowired
	CartRepository cartRepo;

	@Autowired
	IUserService userService;

	@Autowired
	ICartService cartService;

	@Override
	public Cart addCartAndProductFirstTime(Long productid,double quantity,Long custID) {
		Optional<Customer> customer= customerRepo.findById(custID);
		CartItems items= new CartItems();
		Cart cart;
		Optional<Cart> shoppingCart = Optional.empty();
		if(!customer.isEmpty())
			shoppingCart = cartRepo.findById(customer.get().getId());
		Optional<ProductDetails> product = productRepo.findById(productid);
		if(!shoppingCart.isPresent()) {
			cart=new Cart();
			cart.setCustomerDetails(customer.get());
			items.setQuantity(quantity);
			items.setProducts(product.get());
			items.setCart(cart);
			items.setSubTotal(quantity*product.get().getUnitPrice());
			items.setProducts(product.get());
			cart.getCartItems().add(items);
			cartRepo.save(cart);
		}
		else {
			cart= shoppingCart.get();
		}
		return cart;
	}


	@Override
	public Cart updateExistingCart(Long productid, double quantity,Long custID) {
		//Cart cart= customerRepo.findByEmail("ankushdharkar01451@gmail.com").getCart();
		Cart cart= cartRepo.findByCustomerId(custID);
		//System.out.println(customerRepo.findByEmail("ankushdharkar01451@gmail.com"));
		ProductDetails pt = productRepo.findById(productid).orElseThrow( () -> new IllegalStateException("product not found"));
		Boolean productExistInTheCart = false;
		if(cart != null) {
			List<CartItems> items =cart.getCartItems();
			for(CartItems c_items : items) {
				if(c_items.getProducts().equals(pt)) {
					productExistInTheCart =true;
					c_items.setQuantity(c_items.getQuantity()+quantity);
					c_items.setSubTotal(c_items.getQuantity()*pt.getUnitPrice());
					cart.setCartItems(items);
					//System.out.println(cart);
					return cartRepo.save(cart);
				}
			}
		}

		if(!productExistInTheCart && (cart != null))
		{
			CartItems cartItem = new CartItems();
			cartItem.setQuantity(quantity);
			//cartItem.setUnitPrice(unitPrice);
			cartItem.setSubTotal(cartItem.getQuantity()*pt.getUnitPrice());
			cartItem.setProducts(pt);
			cartItem.setCart(cart);
			cart.getCartItems().add(cartItem);
			return cartRepo.saveAndFlush(cart);
		}
		return this.addCartAndProductFirstTime(productid, quantity,custID);
	}


	@Override
	public Boolean deleteFormExistingCard(Long productid,Long custID) {
		Cart cart= cartRepo.findByCustomerId(custID);

		ProductDetails pt = productRepo.findById(productid).orElseThrow( () -> new IllegalStateException("product not found"));
		if(cart != null) {
			List<CartItems> items =cart.getCartItems();
			for(CartItems c_items : items) {
				if(c_items.getProducts().equals(pt)) {
					
					if(items.size() >1) {
						cart.getCartItems().remove(c_items);
						cartRepo.save(cart);
					} else {
						cartRepo.delete(cart);
					}
					return true;
				}
			}
		}

		return false;
	}


	@Override
	public Cart getCutomersCart(Long custID) {
		// TODO Auto-generated method stub
		return null;
	}

}

