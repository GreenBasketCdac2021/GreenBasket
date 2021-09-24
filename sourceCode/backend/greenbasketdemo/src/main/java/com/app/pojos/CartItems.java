package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="cart_items")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class CartItems extends BaseEntity{
	
    private double quantity;
	
	private double unitPrice;
	
	private double subTotal;
	
	//mapping by productDetails class
	@ManyToOne
	@JoinColumn(name="product_id")
    private ProductDetails products;

	
	
	//many to one mapping to join customer table
	@JsonIgnoreProperties("cartItems") 
		@ManyToOne
		@JoinColumn(name="cart_id")
		private Cart cart;
	
	
	


}
