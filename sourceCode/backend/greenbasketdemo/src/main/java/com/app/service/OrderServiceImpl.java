package com.app.service;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.dao.CartItemRepository;
import com.app.dao.CartRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.OrderRepository;
import com.app.dao.PaymentMethodRepository;
import com.app.dao.ProductRepository;
import com.app.pojos.Cart;
import com.app.pojos.CartItems;
import com.app.pojos.Customer;
import com.app.pojos.OrderItems;
import com.app.pojos.OrderStatus;
import com.app.pojos.Orders;
import com.app.pojos.PaymentMethod;
import com.app.pojos.ProductDetails;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService {

	@Autowired
	OrderRepository orderRepo;

	@Autowired
	CartRepository cartRepo;

	@Autowired
	CartItemRepository cartItemsRepo;

	@Autowired
	CustomerRepository customerRepo;

	@Autowired
	PaymentMethodRepository payMethodRepo;

	@Autowired
	ProductRepository productRepo;
	@Override
	public Boolean placeOrder(Long customerId,Long paymentMethodId) {
		try {
			Cart cart = cartRepo.findByCustomerId(customerId);
			List<CartItems> cartItems = cartItemsRepo.findAllByCartId(cart.getId());
			Optional<Customer> customer = customerRepo.findById(customerId);
			Optional<PaymentMethod> paymentMethod = payMethodRepo.findById(paymentMethodId);
			if(cart != null && !cartItems.isEmpty() && customer.get() != null && paymentMethod.get() != null) {
				Orders order = new Orders();
				order.setCustomerDetails(customer.get());
				order.setPay_method(paymentMethod.get());
				order.setStatus(OrderStatus.CONFIRMED);
				Double total = 0.0;
				for(CartItems c:cartItems) {
					total+=c.getSubTotal();
				}
				order.setTotalAmount(total);
				for(CartItems c:cartItems) {
					OrderItems orderItem = new OrderItems();
					orderItem.setCustomer(customer.get());
					Optional<ProductDetails> product= productRepo.findById(c.getProducts().getId());
					orderItem.setProductDetails(product.get());
					orderItem.setQuantity(c.getQuantity());
					orderItem.setOrder(order);
					order.getOrderItems().add(orderItem);
					cartItemsRepo.delete(c);
				}
				orderRepo.save(order);
				cartRepo.delete(cart);

				return true;
			} 
			return false;
		} catch (Exception e) {
			System.out.println("Failed To add order: "+e);
			return false;
		}
	}
	
	public List<Orders> getOrderByCustomerID(Long customerId) {
		List<Orders> order = orderRepo.findByCustomerID(customerId);
		return order;
	}

	

}
