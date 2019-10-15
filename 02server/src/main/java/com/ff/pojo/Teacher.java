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
	private String image;
	/**
	 * 老师介绍
	 */
	private String introduce;

	public Teacher() {
		super();
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getIntroduce() {
		return introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

}
