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
	 * 课程id
	 */
	private int coursesId;

	/**
	 * 排列的顺序
	 */
	private int order;

	/**
	 * 视频列表
	 */
	private List<Video> videos;

	public Chapter() {
		super();
	}

	public Chapter(int id, String name, int coursesId, int order, List<Video> videos) {
		super();
		this.id = id;
		this.name = name;
		this.coursesId = coursesId;
		this.order = order;
		this.videos = videos;
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

	public List<Video> getVideos() {
		return videos;
	}

	public void setVideos(List<Video> videos) {
		this.videos = videos;
	}

	@Override
	public String toString() {
		return "Chapter [id=" + id + ", name=" + name + ", coursesId=" + coursesId + ", order=" + order + ", videos="
				+ videos + "]";
	}

}
