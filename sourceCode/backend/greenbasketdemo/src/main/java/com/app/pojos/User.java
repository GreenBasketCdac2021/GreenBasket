package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
//@Getter
//@Setter
@ToString
public class User extends BaseEntity { 
	@Column(length=20)
	@JsonProperty("firstName")//appers in marshalled json data
	private String fName;
	@Column(length=20)
	private String lastName;
	@Column(length=20,nullable=false )
	private String email;
	@Column(length=256,nullable=false )
	private String password;
	@Column(length=100)
	private String address;
	@Enumerated(EnumType.STRING)
	@Column(name="user_role",length = 20)	
	private UserRole role;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public UserRole getRole() {
		return role;
	}
	public void setRole(UserRole role) {
		this.role = role;
	}
	
	//we need to do mapping one to many
	
//	@OneToMany
//	private Customer cust_id;
//	//private Customer cust_id;
	
	
}

