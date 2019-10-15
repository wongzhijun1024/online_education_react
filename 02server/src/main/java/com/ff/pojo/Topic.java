package com.ff.pojo;

import java.util.List;

public class Topic {
	/**
	 * 主题id
	 */
	private int id;

	/**
	 * 主题名字
	 */
	private String name;

	/**
	 * 课程数据
	 */
	private List<Course> list;

	/*
	 * 主题
	 */
	private String msg = "topic";

	public Topic() {

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

	public List<Course> getList() {
		return list;
	}

	public void setList(List<Course> list) {
		this.list = list;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}
