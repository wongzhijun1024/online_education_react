package com.ff.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ff.dao.ExamMapper;
import com.ff.pojo.ExamChapter;
import com.ff.pojo.Msg;
import com.ff.service.ExamService;

@Service
public class ExamServiceImpl implements ExamService {

	@Autowired
	ExamMapper examMapper;

	@Override
	public Msg insertExamForChapter(List<ExamChapter> examChapters) {

		Msg msg = new Msg();
		msg.setMsg("添加试卷失败！");

		if (examMapper.insertExamForChapter(examChapters) == examChapters.size()) {
			msg.setMsg("添加成功");

			msg.setObject(examChapters);
		}

		return msg;
	}

}
