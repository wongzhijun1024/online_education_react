package com.ff.pojo;

import java.util.List;

public class Section {

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
	private int courseId;

	/**
	 * 排列的顺序
	 */
	private int order;

	/**
	 * 章列表
	 */
	private List<Chapter> chapters;

	public Section() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Section(int id, String name, int courseId, int order, List<Chapter> chapters) {
		super();
		this.id = id;
		this.name = name;
		this.courseId = courseId;
		this.order = order;
		this.chapters = chapters;
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

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public List<Chapter> getChapters() {
		return chapters;
	}

	public void setChapters(List<Chapter> chapters) {
		this.chapters = chapters;
	}

	@Override
	public String toString() {
		return "Section [id=" + id + ", name=" + name + ", courseId=" + courseId + ", order=" + order + ", chapters="
				+ chapters + "]";
	}

}
