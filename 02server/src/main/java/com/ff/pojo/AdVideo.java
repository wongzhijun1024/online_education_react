package com.ff.pojo;

import java.io.Serializable;

public class AdVideo implements Serializable {

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
	 * 广告主题ID
	 */
	private int adTopicId;

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

	public int getAdTopicId() {
		return adTopicId;
	}

	public void setAdTopicId(int adTopicId) {
		this.adTopicId = adTopicId;
	}

	@Override
	public String toString() {
		return "AdVideo [id=" + id + ", url=" + url + ", name=" + name + ", adTopicId=" + adTopicId + "]";
	}

}
