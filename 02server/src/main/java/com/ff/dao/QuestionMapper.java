package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.Chapter;
import com.ff.pojo.Course;
import com.ff.pojo.Question;

@Mapper
public interface QuestionMapper {

	/**
	 * 增加题
	 * 
	 * @param question
	 * @return
	 */
	int insert(Question question);

	/**
	 * 根据章节id查询题
	 * 
	 * @param chapter
	 * @return
	 */
	List<Question> selectQuestionsBychapterId(Chapter chapter);

}