package com.ff.pojo;

import java.util.Arrays;

public class ExamChapter {

	/**
	 * 主键
	 */
	private int id;

	/**
	 * 章节ID
	 */
	private int chapterId;

	/**
	 * 题ID
	 */
	private int questionId;

	public ExamChapter() {
		super();
	}

	public ExamChapter(int id, int chapterId, int questionId) {
		super();
		this.id = id;
		this.chapterId = chapterId;
		this.questionId = questionId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getChapterId() {
		return chapterId;
	}

	public void setChapterId(int chapterId) {
		this.chapterId = chapterId;
	}

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	@Override
	public String toString() {
		return "ExamChapter [id=" + id + ", chapterId=" + chapterId + ", questionId=" + questionId + "]";
	}

}
