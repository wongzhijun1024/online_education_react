package com.ff.service;

import javax.servlet.http.HttpServletRequest;

import com.ff.pojo.Course;
import com.ff.pojo.Msg;
import com.ff.pojo.Topic;

public interface CourseService {
	/**
	 * 查询所有的课程
	 * 
	 * @return 所有的课程
	 */
	Msg selectCourseAll();

	/**
	 * 查询全部的课程，包含里面的子节点
	 * 
	 * @return 数据
	 */
	Msg selectCourseAllLeaf();

	/**
	 * 根据科目的id号查询课程
	 * 
	 * @return
	 */
	Msg selectCoursesByTopicId(Topic topic);

	/**
	 * 
	 * @param course  课程对象
	 * @param request 用户请求
	 * @return
	 */
	Msg insertCourses(Course course, HttpServletRequest request);

}
