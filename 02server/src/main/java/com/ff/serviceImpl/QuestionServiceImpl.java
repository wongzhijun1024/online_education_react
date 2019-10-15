package com.ff.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ff.dao.QuestionMapper;
import com.ff.pojo.Question;
import com.ff.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{
	@Autowired
	QuestionMapper queMapper;
	@Override
	public Question selectByPrimaryKey(Integer qId) {
		// TODO Auto-generated method stub
		return queMapper.selectByPrimaryKey(qId);
	}
	@Override
	public List<Question> selectByTypeAndHard(Question question) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Question> selectByTypeAndHard() {
		// TODO Auto-generated method stub
		return queMapper.selectByTypeAndHard();
	}
	
	//模糊查询题目
	@Override
	public List<Question> selectQuestion(Question q) {
		// TODO Auto-generated method stub
		return queMapper.selectQuestion(q);
	}
	
	//查询所有题目数目
	@Override
	public int selectCount(Question q) {
		// TODO Auto-generated method stub
		return queMapper.selectCount(q);
	}
	/*
	 * 删除
	 */
	@Override
	public int delBatchQuestion(List<String> list) {
		// TODO Auto-generated method stub
		return queMapper.delBatchQuestion(list);
	}

	/*
	 * 新增
	 */
	@Override
	public int insertSelective(Question q) {
		// TODO Auto-generated method stub
		return queMapper.insertSelective(q);
	}

	@Override
	public int updateByPrimaryKeySelective(Question q) {
		// TODO Auto-generated method stub
		return queMapper.updateByPrimaryKeySelective(q);
	}
	@Override
	public List<Question> selectExampaper() {
		// TODO Auto-generated method stub
		return queMapper.selectExampaper();
	}
	@Override
	public List<Question> selectExampaperByTitle(String eTitle) {
		// TODO Auto-generated method stub
		return queMapper.selectExampaperByTitle(eTitle);
	}
	
	//查询所有题目
	@Override
	public List<Question> selectAllQuestion() {
		// TODO Auto-generated method stub
		return queMapper.selectAllQuestion();
	}
	@Override
	public List<Question> selectAllQuestionByQcourseAndQtypeAndQhard(Question q) {
		// TODO Auto-generated method stub
		return queMapper.selectAllQuestionByQcourseAndQtypeAndQhard(q);
	}

}
