package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
//@AllArgsConstructor
//@Setter
//@Getter
@ToString
public class ProductDetails  extends BaseEntity{
	
	@Column(length=20)
	private String productName;
	
	private double stock;
	private double unitPrice;
	
	@Column(length=100)
	private String productDescription;
	
	//mapping
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name="category_id", nullable=false) // to specify FK column
	private Category category;

	public ProductDetails(String productName, double stock, double unitPrice, String productDescription,
			Category category) {
		super();
		this.productName = productName;
		this.stock = stock;
		this.unitPrice = unitPrice;
		this.productDescription = productDescription;
		this.category = category;
	}
	
	//setter  getter
	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getStock() {
		return stock;
	}

	public void setStock(double stock) {
		this.stock = stock;
	}

	public double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	
	
	
	
}
