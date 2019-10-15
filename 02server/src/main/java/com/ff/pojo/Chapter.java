package com.ff.pojo;

import java.util.List;

public class Chapter {

	/**
	 * 章节id
	 */
	private int id;

	/**
	 * 章节名字
	 */
	private String name;

	/**
	 * 章节对应的课程id号
	 */
	private int course_id;
	
	/**
	 * 章节顺序
	 */
	private int order;

	/**
	 * 章节对应的视频
	 */
	private List<Video> list;

	/**
	 * 章节
	 */
	private String msg = "chapter";

	public Chapter() {
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

	public int getCourse_id() {
		return course_id;
	}

	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}

	public List<Video> getList() {
		return list;
	}

	public void setList(List<Video> list) {
		this.list = list;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}
	
	

}
