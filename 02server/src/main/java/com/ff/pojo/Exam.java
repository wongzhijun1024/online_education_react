package com.ff.pojo;

import java.util.Arrays;
import java.util.List;

public class Exam {

	int chapterId;

	int questionIds[];

	public Exam() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getChapterId() {
		return chapterId;
	}

	public void setChapterId(int chapterId) {
		this.chapterId = chapterId;
	}

	public int[] getQuestionIds() {
		return questionIds;
	}

	public void setQuestionIds(int[] questionIds) {
		this.questionIds = questionIds;
	}

	@Override
	public String toString() {
		return "Exam [chapterId=" + chapterId + ", questionIds=" + Arrays.toString(questionIds) + "]";
	}

}
