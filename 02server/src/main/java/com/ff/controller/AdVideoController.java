package com.ff.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ff.pojo.AdTopic;
import com.ff.pojo.AdVideo;
import com.ff.pojo.Msg;
import com.ff.service.AdTopicService;
import com.ff.service.AdVideoService;

@Controller
@RequestMapping("/noi")
public class AdVideoController {
	@Autowired
	private AdVideoService adVideoService;

	/**
	 * 广告视频的标题
	 * 
	 * @return
	 */
	@RequestMapping(value = "adAdVideo")
	@ResponseBody
	public Msg AdTopics() {
		return adVideoService.AdVideoTopics();
	}

	@RequestMapping(value = "addAdVideo")
	@ResponseBody
	public Msg addVideo(AdVideo adVideo, HttpServletResponse resp, HttpServletRequest req) {

		return adVideoService.insertAdVideo(adVideo);
	}

	@RequestMapping(value = "updateAdVideo")
	@ResponseBody
	public Msg updateVideo(AdVideo adVideo, HttpServletResponse resp, HttpServletRequest req) {

		return adVideoService.updateVideo(adVideo);
	}

}
