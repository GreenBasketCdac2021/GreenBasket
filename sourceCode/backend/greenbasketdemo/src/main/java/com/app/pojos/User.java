package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

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
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class User extends BaseEntity { 
	@Column(length=20)
	@JsonProperty("firstName")//appers in marshalled json data
	private String fName;
	@Column(length=20)
	private String lastName;
	@Column(length=20,nullable=false )
	private String email;
	@Column(length=20,nullable=false )
	private String password;
	@Column(length=100)
	private String address;
	@Column(name="reg_date")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDate reg_date;
	@Enumerated(EnumType.STRING)
	@Column(name="user_role",length = 20)	
	private UserRole role;
}