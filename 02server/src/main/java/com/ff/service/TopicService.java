package com.ff.service;

import java.util.List;

import com.ff.pojo.Msg;
import com.ff.pojo.Topic;
public interface TopicService {
	
	/**
	 * 查询所有的科目
	 * @return  返回所有的科目
	 */
	Msg selectTopics();
	

	/**
	 * 增加科目
	 * @param 增加的科目对象
	 * @return 返回增加的科目对象
	 */
	Msg insertTopics(Topic topic);
}
