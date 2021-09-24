package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "productdetails")
/*
 * @NoArgsConstructor
 * 
 * @AllArgsConstructor
 * 
 * @Setter
 * 
 * @Getter
 * 
 * @ToString
 */
public class ProductDetails extends BaseEntity {

	@Column(name = "product_name", length = 20)
	private String productName;

	private double stock;

	@Column(name = "unit_price")
	private double unitPrice;

	@Column(name = "product_description", length = 100)
	private String productDescription;

	// mapping
	@JsonIgnoreProperties("productDetails") 
	@ManyToOne
	@JoinColumn(name = "category_id") // to specify FK column
	private Category categoryName;

	public ProductDetails() {
		super();
	}

	public ProductDetails(String productName, double stock, double unitPrice, String productDescription) {
		super();
		this.productName = productName;
		this.stock = stock;
		this.unitPrice = unitPrice;
		this.productDescription = productDescription;

	}

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

	public Category getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(Category categoryName) {
		this.categoryName = categoryName;
	}

	@Override
	public String toString() {
		return "ProductDetails [productName=" + productName + ", stock=" + stock + ", unitPrice=" + unitPrice
				+ ", productDescription=" + productDescription ;
	}

}
