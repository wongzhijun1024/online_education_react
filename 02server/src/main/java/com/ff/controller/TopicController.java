package com.ff.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ff.pojo.Msg;
import com.ff.pojo.Topic;
import com.ff.service.TopicService;

@Controller
@RequestMapping("/noi")
public class TopicController {
	@Autowired
	private TopicService topicService;
	
	/**
	 * 查询所有课程
	 * @return
	 */
	@RequestMapping(method=RequestMethod.GET,value="topics")
	@ResponseBody
	public Msg selectAllCourse() {
		
		return topicService.selectTopics();
	}
	
	
	@ResponseBody
	@RequestMapping(value = "addTopics")
	public Msg insertTopic(Topic topic, HttpServletResponse res, HttpServletRequest req) {
	
		return topicService.insertTopics(topic);
	}
}
