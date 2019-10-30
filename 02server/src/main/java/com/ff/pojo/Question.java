package com.ff.pojo;

public class Question {

	/**
	 * 主键
	 */
	private int id;

	/**
	 * 标题
	 */
	private String title;

	/**
	 * 所属
	 */
	private int chapterId;

	/**
	 * 第一个选项
	 */
	private String textA;

	/**
	 * 第二个选项
	 */
	private String textB;

	/**
	 * 第三个选项
	 */
	private String textC;

	/**
	 * 第四个选项
	 */
	private String textD;

	/**
	 * 答案
	 */
	private String answer;

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Question(int id, String title, int chapterId, String textA, String textB, String textC, String textD,
			String answer) {
		super();
		this.id = id;
		this.title = title;
		this.chapterId = chapterId;
		this.textA = textA;
		this.textB = textB;
		this.textC = textC;
		this.textD = textD;
		this.answer = answer;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getChapterId() {
		return chapterId;
	}

	public void setChapterId(int chapterId) {
		this.chapterId = chapterId;
	}

	public String getTextA() {
		return textA;
	}

	public void setTextA(String textA) {
		this.textA = textA;
	}

	public String getTextB() {
		return textB;
	}

	public void setTextB(String textB) {
		this.textB = textB;
	}

	public String getTextC() {
		return textC;
	}

	public void setTextC(String textC) {
		this.textC = textC;
	}

	public String getTextD() {
		return textD;
	}

	public void setTextD(String textD) {
		this.textD = textD;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

}