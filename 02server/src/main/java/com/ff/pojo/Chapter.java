package com.ff.pojo;

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
	 * 课程id
	 */
	private int coursesId;

	/**
	 * 排列的顺序
	 */
	private int order;

	public Chapter() {
		super();
	}

	public Chapter(int id, String name, int coursesId, int order) {
		super();
		this.id = id;
		this.name = name;
		this.coursesId = coursesId;
		this.order = order;
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

	public int getCoursesId() {
		return coursesId;
	}

	public void setCoursesId(int coursesId) {
		this.coursesId = coursesId;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return "Chapter [id=" + id + ", name=" + name + ", coursesId=" + coursesId + ", order=" + order + "]";
	}

}
