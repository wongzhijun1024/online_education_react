package com.ff.service;
import com.ff.pojo.Course;
import com.ff.pojo.Msg;
import com.ff.pojo.Topic;


public interface CourseService {
	/**
	 * 查询所有的课程
	 * @return  所有的课程
	 */
	Msg selectAllCourse();
	
	/**
	 * 根据科目的id号查询课程
	 * @return
	 */
	Msg selectCoursesByTopicId(Topic topic);
	
	/**
	 * 插入课程
	 * @param name 课程名字
	 * @param id   科目id
	 * @return
	 */
	Msg insertCourses(Course course);
		
}
