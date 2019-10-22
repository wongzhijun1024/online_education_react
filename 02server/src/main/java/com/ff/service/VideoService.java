package com.ff.service;
import com.ff.pojo.Chapter;
import com.ff.pojo.Msg;
import com.ff.pojo.Video;


public interface VideoService {
	/**
	 * 查询所有的視頻
	 * @return  所有的視頻
	 */
	Msg selectAllVideo();
	
	/**
	 * 根据科目的id号查询科目
	 * @return
	 */
	Msg selectVideosByChapterId(Chapter chapter);
	
	/**
	 * 插入课程
	 * @param name 课程名字
	 * @param id   科目id
	 * @return
	 */
	Msg insertVideo(Video video);
	
	/**
	 * 更新视频
	 * @param video  
	 * @return
	 */
	Msg updateById(Video video);
	
	/**
	 *   根据id获得视频
	 * @param video
	 * @return
	 */
	Msg getVideo(Video video);
		
}
