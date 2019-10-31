package com.ff.service;

import javax.servlet.http.HttpServletRequest;

import com.ff.pojo.Chapter;
import com.ff.pojo.Msg;
import com.ff.pojo.Video;

public interface VideoService {

	/**
	 * 根据科目的id号查询科目
	 * 
	 * @return
	 */
	Msg selectVideosByChapterId(Chapter chapter);

	/**
	 * 
	 * @param video            视频数据
	 * @param multipartRequest 数据请求
	 * @return
	 */
	Msg insertVideo(Video video, HttpServletRequest multipartRequest);

	/**
	 * 更新视频
	 * 
	 * @param video
	 * @return
	 */
	Msg updateVideoById(Video video, HttpServletRequest multipartRequest);

}
