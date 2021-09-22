package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="category")
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
public class Category extends BaseEntity{
	
	
	@Column(name="Category",length = 20)
	private String categoryName;
	
	//mapping : modified by Madhura
	@JsonIgnoreProperties("categoryName")
		@OneToMany(mappedBy="categoryName",cascade = CascadeType.ALL, orphanRemoval = true)
		private List<ProductDetails> productDetails = new ArrayList<>();

	public Category() {
		super();
	}

	public Category(String categoryName) {
		super();
		this.categoryName = categoryName;
		
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	

	public List<ProductDetails> getProductDetails() {
		return productDetails;
	}

	public void setProductDetails(List<ProductDetails> productDetails) {
		this.productDetails = productDetails;
	}

	@Override //modified by Madhura
	public String toString() {
		return "Category Id "+getId()+" categoryName=" + categoryName ;
	}
		//helper methods : added by Madhura
	public void addProduct(ProductDetails p)
	{
		productDetails.add(p);
		p.setCategoryName(this);
	}
	public void removeProduct(ProductDetails p)
	{
		productDetails.remove(p);
		p.setCategoryName(null);
	}
		

}
