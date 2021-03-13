package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstnamne;
	
	@Column(name = "last_name")
	private String lastname;
	
	@Column(name = "email_id")
	private String emailID;
	@Column(name = "phone")
	private String telephone;
	
	public Employee() {
		
	}
	
	//firstnamne, emailID
	public Employee(String firstnamne, String lastname, String emailID, String telephone) {
		super();
		this.firstnamne = firstnamne;
		this.lastname = lastname;
		this.emailID = emailID;
		this.telephone = telephone;
	}
	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstnamne() {
		return firstnamne;
	}
	public void setFirstnamne(String firstnamne) {
		this.firstnamne = firstnamne;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmailID() {
		return emailID;
	}
	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}
  
}
