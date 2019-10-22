package com.ff.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.AdTopic;
import com.ff.pojo.AdVideo;
import com.ff.pojo.Topic;

@Mapper
public interface AdVideoMapper {

	/**
	 * 查詢全部的廣告主題
	 * 
	 * @return
	 */
	List<AdVideo> selectAdTopics();

	/**
	 * 
	 * @param adTopic
	 *            插入的廣告主題
	 * @return 是否成功
	 */
	int insert(AdVideo adVideo);

	/**
	 * 
	 * @param adTopic
	 *            刪除廣告主題
	 * @return
	 */
	int delAdTopic(AdTopic adTopic);

	/**
	 * 查询指定广告科目
	 * 
	 * @return 广告科目对象
	 */
	Topic selectAdTopic(String name);

	/**
	 * 更新广告视频
	 * 
	 * @param adVideo
	 * @return
	 */
	int updateVideo(AdVideo adVideo);
}