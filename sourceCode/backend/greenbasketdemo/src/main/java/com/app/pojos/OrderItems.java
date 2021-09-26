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

@Entity
@Table(name="order_items")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class OrderItems extends BaseEntity{

	@JsonIgnoreProperties("orderitems")
	@OneToOne
	@JoinColumn(name="customer_id")
	private Customer customer; 
	
	@JsonIgnoreProperties("orderitems")
	@OneToOne
	@JoinColumn(name="product_id")
	private ProductDetails productDetails; 
	
	@JsonIgnoreProperties("orderitems")
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Orders order;
	
	private double quantity;
	
	
}
