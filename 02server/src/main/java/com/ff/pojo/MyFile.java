package com.ff.pojo;

public class MyFile {

	/**
	 * 主键
	 */
	private int id;

	/**
	 * 图片key值，根据当前的key值去图片服务器换图片地址
	 */
	private String url;

	/**
	 * 字符串ID
	 */
	private String fileId;

	public MyFile() {
		super();
	}

	public MyFile(int id, String url, String fileId) {
		super();
		this.id = id;
		this.url = url;
		this.fileId = fileId;
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

	public String getFileId() {
		return fileId;
	}

	public void setFileId(String fileId) {
		this.fileId = fileId;
	}

	@Override
	public String toString() {
		return "MyFile [id=" + id + ", url=" + url + ", fileId=" + fileId + "]";
	}

}
