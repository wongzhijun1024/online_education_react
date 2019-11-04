package com.ff.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ff.dao.ScoreMapper;
import com.ff.pojo.Score;
import com.ff.service.ScoreService;

@Service
public class ScoreServiceImpl implements ScoreService {
	@Autowired
	ScoreMapper scoreMaper;

	// 保存学生考试成绩
	@Override
	public int insertScore(Score record) {
		// TODO Auto-generated method stub
		return scoreMaper.insertScore(record);
	}

	// 根据学生姓名和试卷名称查询考试成绩
	@Override
	public List<Score> selectByEtitleAndStuName(Score record) {
		// TODO Auto-generated method stub
		return scoreMaper.selectByEtitleAndStuName(record);
	}

	@Override
	public List<Score> selectByStuName(Score score) {
		// TODO Auto-generated method stub
		return scoreMaper.selectByStuName(score);
	}

	@Override
	public int selectCount(Score score) {
		// TODO Auto-generated method stub
		return scoreMaper.selectCount(score);
	}

	@Override
	public List<Score> selectScoreByStuName(String name) {
		// TODO Auto-generated method stub
		return scoreMaper.selectScoreByStuName(name);
	}

}
