package com.app.pojos;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="paymentmethod")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class PaymentMethod extends BaseEntity {
	
	public String paymentMethodDescription;

}
