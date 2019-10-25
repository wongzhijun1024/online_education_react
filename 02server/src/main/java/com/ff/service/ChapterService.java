package com.ff.service;

import java.util.List;

import com.ff.pojo.Chapter;
import com.ff.pojo.Course;
import com.ff.pojo.Msg;
import com.ff.pojo.Topic;

public interface ChapterService {
	/**
	 * 查询所有的章节
	 * 
	 * @return 所有的课程
	 */
	Msg selectAllChapter();

	/**
	 * 根据科目的id号查询科目
	 * 
	 * @return
	 */
	Msg selectChaptersByCourseId(Course course);

	/**
	 * 插入课程
	 * 
	 * @param name 课程名字
	 * @param id   科目id
	 * @return
	 */
	Msg insertChapter(Chapter chapter);

	/**
	 * 根据课程的名字查询课程
	 * 
	 * @param course 课程对象
	 * @return
	 */
	Msg selectChaptersByName(Chapter chapter);

}
