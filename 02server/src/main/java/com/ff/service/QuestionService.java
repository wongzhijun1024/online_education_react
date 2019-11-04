package com.ff.service;

import com.ff.pojo.Chapter;
import com.ff.pojo.Msg;
import com.ff.pojo.Question;

public interface QuestionService {

	/**
	 * 添加题
	 * 
	 * @param question 题
	 * @return
	 */
	Msg insert(Question question);

	/**
	 * 查询所有的题库
	 * 
	 * @return
	 */
	Msg selectQuestionsAll();

	/**
	 * 通过章节id查询题
	 * 
	 * @return
	 */

	Msg selectQuestionsByChapterid(Chapter chapter);

}
