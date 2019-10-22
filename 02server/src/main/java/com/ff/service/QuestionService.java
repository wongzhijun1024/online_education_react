package com.ff.service;

import java.util.List;

import com.ff.pojo.Question;

public interface QuestionService {
	Question selectByPrimaryKey(Integer qId);

	List<Question> selectByTypeAndHard(Question question);

	// 查询题目
	List<Question> selectByTypeAndHard();

	/*
	 * 分页查询和显示
	 */
	List<Question> selectQuestion(Question q);

	int selectCount(Question q);

	int insertSelective(Question q);

	int updateByPrimaryKeySelective(Question q);

	int delBatchQuestion(List<String> list);

	/*
	 * 查询试卷
	 */
	List<Question> selectExampaper();

	List<Question> selectExampaperByTitle(String eTitle);
	
	//查询所有题目
    List<Question> selectAllQuestion();
    
    //根据科目查询所有题

	List<Question> selectAllQuestionByQcourseAndQtypeAndQhard(Question q);
}
