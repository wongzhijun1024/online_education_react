package com.ff.pojo;

public class Video {

	private int id;

	/**
	 * 视频Id
	 */
	private String fileId;

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
	private String msg = "video";

	/**
	 * 章节顺序
	 */
	private int order;

	public Video() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Video(int id, String fileId, String name, int chapter_id, String msg, int order) {
		super();
		this.id = id;
		this.fileId = fileId;
		this.name = name;
		this.chapter_id = chapter_id;
		this.msg = msg;
		this.order = order;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFileId() {
		return fileId;
	}

	public void setFileId(String fileId) {
		this.fileId = fileId;
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
		return "Video [id=" + id + ", fileId=" + fileId + ", name=" + name + ", chapter_id=" + chapter_id + ", msg="
				+ msg + ", order=" + order + "]";
	}

}
