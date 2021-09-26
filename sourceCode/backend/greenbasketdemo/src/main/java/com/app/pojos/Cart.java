package com.app.pojos;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name="cart")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Cart extends BaseEntity {
	@Column(name="Date_timeStamp")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDateTime orderDatetime =LocalDateTime.now();
	
	//private double totalAmount;
	
	//many to one mapping to join customer table
	@JsonIgnoreProperties("cart")
	@OneToOne
	@JoinColumn(name="customer_id")
	private Customer customerDetails;
	
	//many to one mapping to join customer table
	@JsonIgnoreProperties("cart")
		@OneToMany(mappedBy="cart",cascade = CascadeType.ALL, orphanRemoval = true)
		private List<CartItems> cartItems = new ArrayList<CartItems>();
	
}
