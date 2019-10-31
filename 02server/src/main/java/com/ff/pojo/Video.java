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
	private int chapterId = -1;

	/**
	 * 节
	 */
	private String msg = "video";

	/**
	 * 章节顺序
	 */
	private int order;

	public Video() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Video(int id, String url, String name, int chapterId, String msg, int order) {
		super();
		this.id = id;
		this.url = url;
		this.name = name;
		this.chapterId = chapterId;
		this.msg = msg;
		this.order = order;
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

	public int getChapterId() {
		return chapterId;
	}

	public void setChapterId(int chapterId) {
		this.chapterId = chapterId;
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

	@Override
	public String toString() {
		return "Video [id=" + id + ", url=" + url + ", name=" + name + ", chapterId=" + chapterId + ", msg=" + msg
				+ ", order=" + order + "]";
	}

}
