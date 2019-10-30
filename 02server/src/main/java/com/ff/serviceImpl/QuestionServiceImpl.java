package com.ff.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ff.dao.QuestionMapper;
import com.ff.pojo.Msg;
import com.ff.pojo.Question;
import com.ff.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionMapper questionMapper;

	@Override
	public Msg insert(Question question) {
		Msg msg = new Msg();
		msg.setMsg("添加失败");
		if (questionMapper.insert(question) == 1) {
			msg.setMsg("添加成功");
			msg.setCode(1);
		}
		return msg;
	}

}
