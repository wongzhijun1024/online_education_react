package com.ff.service;

import com.ff.pojo.AdVideo;
import com.ff.pojo.Msg;

public interface AdVideoService {

	/**
	 * 查询所有的广告视频
	 * 
	 * @return
	 */
	Msg AdVideoTopics();

	/**
	 * 插入广告视频
	 * 
	 * @param adVideo
	 *            广告视频
	 * @return
	 */
	Msg insertAdVideo(AdVideo adVideo);

	/**
	 * 更新视频
	 * 
	 * @param video
	 * @return
	 */
	Msg updateVideo(AdVideo adVideo);

}
