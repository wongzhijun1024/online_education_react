package com.ff.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.ff.pojo.Chapter;

@Mapper
public interface ChapterMapper {

	/**
	 * 插入新的章节
	 * 
	 * @param chapter 章节
	 * @return 插入的数据
	 */
	int insert(Chapter chapter);

	/**
	 * 查询全部的章节
	 * 
	 * @return 章节列表
	 */
	List<Chapter> selectChapters();

	/**
	 * 
	 * @param id 课程的id
	 * @return 课程列表
	 */
	List<Chapter> selectChaptersByCourseId(int id);

	/**
	 * 
	 * @param id 课程的id
	 * @return 课程列表包含子节点
	 */
	List<Chapter> selectChaptersByCourseIdLeaf(int id);

	/**
	 * 根据名字查询课程
	 * 
	 * @return 课程列表
	 */
	List<Chapter> selectByName(Chapter chapter);

}