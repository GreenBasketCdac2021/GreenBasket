package com.app.pojos;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="orders")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Orders extends BaseEntity {
	
	//many to one mapping to join customer table
	@JsonIgnoreProperties("orders")
	@OneToOne//(fetch = FetchType.LAZY)
	@JoinColumn(name="customer_id")
	private Customer customerDetails;
		
	@OneToOne
	@JoinColumn(name="payment_method_id")	
	private PaymentMethod pay_method;
	
    @Enumerated(EnumType.STRING)
	@Column(name="OrderStatus",length = 20)
    private OrderStatus status;
    
    @Column(name="total")
    private double totalAmount;
	
	@Column(name="order_date")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDateTime orderDatetime =LocalDateTime.now();
	
	//many to one mapping to join customer table
	@JsonIgnoreProperties("orders")
	@OneToMany(mappedBy="order",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<OrderItems> orderItems = new ArrayList<OrderItems>();
}
