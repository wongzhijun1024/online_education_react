package com.ff.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ff.pojo.Course;
import com.ff.pojo.Msg;
import com.ff.pojo.Topic;
import com.ff.service.CourseService;

@Controller
@RequestMapping("/noi")
public class CourseController {
	@Autowired
	private CourseService courseService;

	/**
	 * 根据科目的ID查询对应的课程
	 * 
	 * @return
	 */
	@RequestMapping(value = "allcourses")
	@ResponseBody
	public Msg selectAllCourse() {
		return courseService.selectAllCourse();
	}

	/**
	 * 根据科目的ID查询对应的课程
	 * 
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET, value = "coursesByTopicId")
	@ResponseBody
	public Msg selectCoursesByTopicId(Topic topic, HttpServletResponse resp, HttpServletRequest req) {
		return courseService.selectCoursesByTopicId(topic);
	}

	@RequestMapping(value = "addCourses")
	@ResponseBody
	public Msg addCourses(Course course, HttpServletResponse resp, HttpServletRequest req) {

		return courseService.insertCourses(course);
	}

}
