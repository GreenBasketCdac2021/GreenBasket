package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
		@OneToMany(mappedBy="category",cascade = CascadeType.ALL, orphanRemoval = true)
		private Set<ProductDetails> productDetails = new HashSet<>();

}
