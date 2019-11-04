package com.ff.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ff.pojo.Chapter;
import com.ff.pojo.Msg;
import com.ff.pojo.Video;
import com.ff.service.VideoService;

@Controller
@RequestMapping("/noi")
public class VideoController {
	@Autowired
	private VideoService videoService;

	/**
	 * 根据科目的ID查询对应的视频
	 * 
	 * @return
	 */
	@RequestMapping(value = "videosByChapterId")
	@ResponseBody
	public Msg selectVideosByChapterId(Chapter chapter, HttpServletResponse resp, HttpServletRequest req) {
		return videoService.selectVideosByChapterId(chapter);
	}

	@RequestMapping(value = "video/add")
	@ResponseBody
	public Msg addVideo(Video video, HttpServletResponse resp, HttpServletRequest request) {

		return videoService.insertVideo(video, request);
	}

	@RequestMapping(value = "video/update")
	@ResponseBody
	public Msg updateVideo(Video video, HttpServletResponse resp, HttpServletRequest request) {

		return videoService.updateVideoById(video, request);
	}

}
