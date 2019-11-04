package com.ff.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.Course;
import com.ff.pojo.Section;

@Mapper
public interface SectionMapper {

	/**
	 * 
	 * @param id 课程的id
	 * @return 课程列表
	 */
	List<Section> selectSectionsByCourseId(Course course);

}