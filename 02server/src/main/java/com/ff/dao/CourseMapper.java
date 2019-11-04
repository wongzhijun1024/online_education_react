package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.Course;

@Mapper
public interface CourseMapper {

	/**
	 * 增加课程
	 * 
	 * @param record 课程
	 * @return 返回成功标志
	 */
	int insert(Course record);

	/**
	 * 查询所有的课程
	 * 
	 * @return
	 */

	List<Course> selectCourseAll();

	/**
	 * 查询所有的课程,包含子节点
	 * 
	 * @return
	 */

	List<Course> selectCourseAllLeaf();

	/**
	 * 查询课程和课程里面的章节
	 * 
	 * @return 课程
	 */
	List<Course> selectCourseAndChapters();

	/**
	 * 根据科目的id号查询对应课程
	 * 
	 * @param id 科目id
	 * @return 查询的所有课程
	 */
	List<Course> getCoursesByTopicId(int id);

	/**
	 * 根据课程的名字查询课程
	 * 
	 * @param name 课程名字
	 * @return 返回对应的课程
	 */
	Course getCourseByName(String name);

	/**
	 * 查询所有课程里面的题
	 * 
	 * @return
	 */
	List<Course> selectAllQuestionsOfCourses();
}