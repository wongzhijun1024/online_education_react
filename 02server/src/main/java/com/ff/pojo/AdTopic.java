package com.ff.pojo;

import java.io.Serializable;
import java.util.List;

public class AdTopic implements Serializable {

	/**
	 * 视频主题id
	 */
	private int id;

	/**
	 * 视频名字
	 */
	private String name;

	/**
	 * 广告视频
	 */
	private List<AdVideo> adVideos;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<AdVideo> getAdVideos() {
		return adVideos;
	}

	public void setAdVideos(List<AdVideo> adVideos) {
		this.adVideos = adVideos;
	}

	@Override
	public String toString() {
		return "AdTopic [id=" + id + ", name=" + name + ", adVideos=" + adVideos + "]";
	}

}
