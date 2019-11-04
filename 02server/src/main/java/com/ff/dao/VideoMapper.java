package com.ff.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.ff.pojo.Video;

@Mapper
public interface VideoMapper {

	/**
	 * 插入新的视频
	 * 
	 * @param Video 视频
	 * @return 是否插入成功的标志
	 */
	int insert(Video video);

	/**
	 * 根据章节的ID查询视频
	 * 
	 * @param id 视频id
	 * @return 视频
	 */
	Video selectById(Integer id);

	/**
	 * 
	 * @param Video 更新的视频
	 * @return 是否更新成功的标志
	 */
	int updateById(Video video);

	/**
	 * 
	 * @param Video 更新的视频
	 * @return 是否更新成功的标志
	 */
	int updateByVideoId(Video video);

	/**
	 * 
	 * @param id 视频的id
	 * @return 视频列表
	 */
	List<Video> selectVideosByChapterId(int id);

	/**
	 * 
	 * @param video 视频数据
	 * @return 视频列表
	 */
	List<Video> selectVideosByName(Video video);

}