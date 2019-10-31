package com.ff.service;

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

}
