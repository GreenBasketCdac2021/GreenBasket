package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="orderdetails")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class OrderDetails extends BaseEntity{
	
private int productQuantity;
	
	private double productsPrice;
	
	private double totalPrice;
	
//	@OneToOne
//	private ProductDetails product_id;
//	
//	@OneToOne
//	private Orders order_id;

}
