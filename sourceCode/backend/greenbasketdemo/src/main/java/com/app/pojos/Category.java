package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="category")

  @NoArgsConstructor
  
  @AllArgsConstructor
  
  @Setter
  
  @Getter
  
  @ToString
 
public class Category extends BaseEntity{
	
	
	@Column(name="Category",length = 20)
	private String categoryName;
	
	//mapping
	//@JsonIgnoreProperties("ProductDetails")
		@OneToMany(mappedBy="categoryName",cascade = CascadeType.ALL, orphanRemoval = true)
		private Set<ProductDetails> productDetails = new HashSet<>();

		/*
		 * public Category() { super(); }
		 * 
		 * public Category(String categoryName, Set<ProductDetails> productDetails) {
		 * super(); this.categoryName = categoryName; this.productDetails =
		 * productDetails; }
		 * 
		 * public String getCategoryName() { return categoryName; }
		 * 
		 * public void setCategoryName(String categoryName) { this.categoryName =
		 * categoryName; }
		 * 
		 * public Set<ProductDetails> getProductDetails() { return productDetails; }
		 * 
		 * public void setProductDetails(Set<ProductDetails> productDetails) {
		 * this.productDetails = productDetails; }
		 * 
		 * @Override public String toString() { return "Category [categoryName=" +
		 * categoryName + ", productDetails=" + productDetails + "]"; }
		 */
		
		

}
