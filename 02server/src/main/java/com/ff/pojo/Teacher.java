package com.ff.pojo;

public class Teacher {

	/**
	 * 老师id
	 */
	private int id;
	/**
	 * 老师名字
	 */
	private String name;
	/**
	 * 老师图片
	 */
	private String tkey;
	/**
	 * 老师介绍
	 */
	private String introduce;

	public Teacher() {
		super();
	}

	public Teacher(int id, String name, String tkey, String introduce) {
		super();
		this.id = id;
		this.name = name;
		this.tkey = tkey;
		this.introduce = introduce;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTkey() {
		return tkey;
	}

	public void setTkey(String tkey) {
		this.tkey = tkey;
	}

	public String getIntroduce() {
		return introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

	@Override
	public String toString() {
		return "Teacher [id=" + id + ", name=" + name + ", tkey=" + tkey + ", introduce=" + introduce + "]";
	}

}
