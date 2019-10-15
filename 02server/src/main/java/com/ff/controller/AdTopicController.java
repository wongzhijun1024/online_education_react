package com.ff.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ff.pojo.AdTopic;
import com.ff.pojo.Msg;
import com.ff.service.AdTopicService;

@Controller
@RequestMapping("/noi")
public class AdTopicController {
	@Autowired
	private AdTopicService adTopicService;

	/**
	 * 广告视频的标题
	 * 
	 * @return
	 */
	@RequestMapping(value = "adTopics")
	@ResponseBody
	public Msg AdTopics() {
		return adTopicService.getAdTopics();
	}

	@RequestMapping(value = "addAdTopic")
	@ResponseBody
	public Msg addVideo(AdTopic adTopic, HttpServletResponse resp, HttpServletRequest req) {

		return adTopicService.insertAdTopic(adTopic);
	}

}
