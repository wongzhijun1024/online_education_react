package com.ff.pojo;

public class Video {

	private int id;

	/**
	 * 视频地址
	 */
	private String url;

	/**
	 * 视频名字
	 */
	private String name;

	/**
	 * 章节id
	 */
	private int chapter_id;
	
	/**
	 * 节
	 */
	private String msg ="video";

	/**
	 * 章节顺序
	 */
	private int order;

	public Video() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getChapter_id() {
		return chapter_id;
	}

	public void setChapter_id(int chapter_id) {
		this.chapter_id = chapter_id;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	

}
