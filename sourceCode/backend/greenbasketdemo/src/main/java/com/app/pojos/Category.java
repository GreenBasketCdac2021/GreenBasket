package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
	
	@Enumerated(EnumType.STRING)
	@Column(name="Category",length = 20)
	private Categories categoryName;

}
