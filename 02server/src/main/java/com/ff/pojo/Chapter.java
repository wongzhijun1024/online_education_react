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
	private int courseId;

	/**
	 * 排列的顺序
	 */
	private int order;

	/**
	 * 视频列表
	 */
	private List<Video> videos;

	/**
	 * 题库
	 */
	private List<Question> questions;

	public Chapter() {
		super();
	}

	public Chapter(int id, String name, int courseId, int order, List<Video> videos, List<Question> questions) {
		super();
		this.id = id;
		this.name = name;
		this.courseId = courseId;
		this.order = order;
		this.videos = videos;
		this.questions = questions;
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

	public List<Video> getVideos() {
		return videos;
	}

	public void setVideos(List<Video> videos) {
		this.videos = videos;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	@Override
	public String toString() {
		return "Chapter [id=" + id + ", name=" + name + ", courseId=" + courseId + ", order=" + order + ", videos="
				+ videos + ", questions=" + questions + "]";
	}

}
