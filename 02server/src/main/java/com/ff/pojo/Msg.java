package com.ff.pojo;

public class Msg {

	/**
	 * -1 失败 1 成功
	 */
	private String msg = "操作失败！";

	private int code = -1;

	private Object object;

	public Msg() {

	}

	public Msg(String msg, int code, Object object) {
		super();
		this.msg = msg;
		this.code = code;
		this.object = object;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public Object getObject() {
		return object;
	}

	public void setObject(Object object) {
		this.object = object;
	}

	@Override
	public String toString() {
		return "Msg [msg=" + msg + ", code=" + code + ", object=" + object + "]";
	}

}
