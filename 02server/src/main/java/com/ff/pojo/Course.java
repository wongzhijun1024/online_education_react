package com.ff.pojo;

import java.util.List;

public class Course {
	/**
	 * 课程id
	 */
	private int id;

	/**
	 * 课程名字
	 */
	private String name;

	/**
	 * 课程价格
	 */
	private float price;

	/**
	 * 折扣价格
	 */
	private float discountPrice;

	/**
	 * 课程介绍
	 */
	private String introduce;

	/**
	 * 课程图片
	 */
	private String imageUrl;

	/**
	 * 主题id
	 */
	private int topicId;

	/**
	 * 每个课程里面的章节
	 */
	private List<Chapter> list;
	/*
	 * 课程
	 */
	private String msg = "course";
	

	public Course() {

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

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public float getDiscountPrice() {
		return discountPrice;
	}

	public void setDiscountPrice(float discountPrice) {
		this.discountPrice = discountPrice;
	}

	public String getIntroduce() {
		return introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public int getTopicId() {
		return topicId;
	}

	public void setTopicId(int topicId) {
		this.topicId = topicId;
	}

	public List<Chapter> getList() {
		return list;
	}

	public void setList(List<Chapter> list) {
		this.list = list;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	
	
}