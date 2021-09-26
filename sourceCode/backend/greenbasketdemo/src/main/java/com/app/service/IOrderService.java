package com.app.service;

import java.util.List;

import com.app.pojos.Orders;

public interface IOrderService {

	public Boolean placeOrder(Long customerId,Long paymentMethodId);
	public List<Orders> getOrderByCustomerID(Long customerID);
}
