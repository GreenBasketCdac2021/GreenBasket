package com.app.pojos;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Currency;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jdk.jfr.Timespan;
import jdk.jfr.Timestamp;

//import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="cart")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Cart extends BaseEntity {
	@Column(name="timeStamp")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDateTime orderDate;
	
	//private double totalAmount;
	
//	@Enumerated(EnumType.STRING)
//	@Column(name="PaymentMethod",length = 20)	
//	private PaymentMethod pay_method;
	
//	@Enumerated(EnumType.STRING)
//	@Column(name="OrderStatus",length = 20)	
//	private OrderStatus status;
//	
	
	//many to one mapping to join customer table
	@JsonIgnoreProperties("cart")
	@OneToOne
	@JoinColumn(name="customer_id")
	private Customer customerDetails;
	
	//many to one mapping to join customer table
	@JsonIgnoreProperties("cart")
		@OneToMany(mappedBy="cart",cascade = CascadeType.ALL, orphanRemoval = true)
		private List<CartItems> cartItems;

	
}
