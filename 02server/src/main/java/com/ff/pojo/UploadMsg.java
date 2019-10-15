package com.ff.pojo;

public class UploadMsg {
	/**
	 * 成功状态
	 */
	private int status;
	/**
	 * 提示信息
	 */
	private String msg;
	/**
	 * 返回key值
	 */
	private String key;
	/**
	 * 视频名字
	 */
	private String name;

	public UploadMsg() {
		super();
	}

	public UploadMsg(int status, String msg, String name, String key) {
		this.status = status;
		this.msg = msg;
		this.name = name;
		this.key = key;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "UploadMsg [status=" + status + ", msg=" + msg + ", key=" + key + ", name=" + name + "]";
	}

}
