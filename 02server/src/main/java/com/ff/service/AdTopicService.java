package com.ff.service;

import com.ff.pojo.AdTopic;
import com.ff.pojo.Msg;

public interface AdTopicService {

	/**
	 *
	 * @return 所有广告主题，包含视频
	 */
	public Msg getAdTopics();

	/**
	 * 
	 * @param adTopic
	 *            广告主题
	 * @return 成功插入的广告主题
	 */
	public Msg insertAdTopic(AdTopic adTopic);

	/**
	 * 
	 * 
	 * @param AdTopic
	 *            更新广告主题
	 * @return 返回更新的广告主题
	 */
	public Msg updateById(AdTopic adTopic);

}
