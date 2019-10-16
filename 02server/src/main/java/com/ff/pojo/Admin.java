package com.ff.pojo;

public class Admin {
	private Integer id;

	private String name;

	private String passwd;

	private int type;

	public Admin() {
		super();
	}

	public Admin(Integer id, String name, String passwd) {
		super();
		this.id = id;
		this.name = name;
		this.passwd = passwd;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", name=" + name + ", passwd=" + passwd + ", type=" + type + "]";
	}

}