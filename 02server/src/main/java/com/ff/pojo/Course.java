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
	 * 状态值。 0：未发布；1：更新中；2：完结
	 */
	private int state;

	/**
	 * 课程介绍
	 */
	private String introduce;

	/**
	 * 课程图片
	 */
	private String url;

	/**
	 * 老师id
	 */
	private int teacherId;

	/*
	 * 会员类型。0，免费；1，普通会员；2，超级会员；
	 */
	private int ctype;

	/**
	 * 当前课程的所有章节
	 */
	private List<Chapter> chapters;

	public Course() {
		super();
	}

	public Course(int id, String name, int state, String introduce, String url, int teacherId, int ctype,
			List<Chapter> chapters) {
		super();
		this.id = id;
		this.name = name;
		this.state = state;
		this.introduce = introduce;
		this.url = url;
		this.teacherId = teacherId;
		this.ctype = ctype;
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

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public String getIntroduce() {
		return introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}

	public int getCtype() {
		return ctype;
	}

	public void setCtype(int ctype) {
		this.ctype = ctype;
	}

	public List<Chapter> getChapters() {
		return chapters;
	}

	public void setChapters(List<Chapter> chapters) {
		this.chapters = chapters;
	}

	@Override
	public String toString() {
		return "Course [id=" + id + ", name=" + name + ", state=" + state + ", introduce=" + introduce + ", url=" + url
				+ ", teacherId=" + teacherId + ", ctype=" + ctype + ", chapters=" + chapters + "]";
	}

}