package com.ff.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.ff.pojo.Chapter;

@Mapper
public interface ChapterMapper {

	/**
	 * 插入新的章节
	 * 
	 * @param chapter
	 *            章节
	 * @return 是否插入成功的标志
	 */
	int insert(Chapter chapter);

	/**
	 * 查询全部的章节
	 * 
	 * @return 章节列表
	 */
	List<Chapter> getAllChapter();

	/**
	 * 
	 * @param id
	 *            课程的id
	 * @return 课程列表
	 */
	List<Chapter> getChaptersByCourseId(int id);

}