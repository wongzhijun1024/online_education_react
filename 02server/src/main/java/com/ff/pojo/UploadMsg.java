package com.ff.pojo;

public class UploadMsg {
	/**
	 * 成功状态
	 */
	private int status = -1;
	/**
	 * 提示信息
	 */
	private String msg = "文件为空";
	/**
	 * 存储数据
	 */
	private Object ob;

	public UploadMsg() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UploadMsg(int status, String msg, Object ob) {
		super();
		this.status = status;
		this.msg = msg;
		this.ob = ob;
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

	public Object getOb() {
		return ob;
	}

	public void setOb(Object ob) {
		this.ob = ob;
	}

	@Override
	public String toString() {
		return "UploadMsg [status=" + status + ", msg=" + msg + ", ob=" + ob + "]";
	}

}
