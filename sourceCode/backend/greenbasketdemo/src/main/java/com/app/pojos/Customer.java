package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;

import lombok.Setter;
import lombok.ToString;

/*userName: '',
password: '',
firstName: '',
lastName: '',
age: '',
salary: '',*/

@Entity
@Table(name="customer")
@NoArgsConstructor
@AllArgsConstructor
//@Setter
//@Getter
@ToString(exclude = "password")
public class Customer extends BaseEntity { 
	public String getfName() {
		return fName;
	}


	public void setfName(String fName) {
		this.fName = fName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public LocalDate getReg_date() {
		return reg_date;
	}


	public void setReg_date(LocalDate reg_date) {
		this.reg_date = reg_date;
	}


	public Cart getCart() {
		return cart;
	}


	public void setCart(Cart cart) {
		this.cart = cart;
	}


	@Column(length=20)
	@JsonProperty("firstName")//appers in marshalled json data
	private String fName;
	@Column(length=20)
	private String lastName;
	@Column(length=20,nullable=false )
	private String email;
	@Column(length=20,nullable=false )
	private String password;
	@Column(length=50)
	private String phone;
	@Column(length=100)
	private String address;
	@Column(name="reg_date")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDate reg_date;
	
	
	@JsonIgnoreProperties("customerDetails")
	@OneToOne(mappedBy = "customerDetails")
	private Cart cart;
	
}

