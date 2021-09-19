package com.app.pojos;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

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
	@Column(name="order_date")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDateTime orderDate;
	
	private double totalAmount;
	@Enumerated(EnumType.STRING)
	@Column(name="PaymentMethod",length = 20)	
	private PaymentMethod pay_method;
	
	@Enumerated(EnumType.STRING)
	@Column(name="OrderStatus",length = 20)	
	private OrderStatus status;

	
}
