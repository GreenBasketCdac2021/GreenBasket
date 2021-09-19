package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

//import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name="productdetails")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class ProductDetails  extends BaseEntity{
	
	@Column(length=20)
	private String productName;
	
	private double stock;
	private double unitPrice;
	
	@Column(length=100)
	private String productDescription;
	
	//mapping
//	@OneToOne
//	private Category category_id;
//	
	

}
