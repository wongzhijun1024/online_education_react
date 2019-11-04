package com.ff.service;

import java.util.List;

import com.ff.pojo.Score;

public interface ScoreService {
	// 保存学生考试成绩
	int insertScore(Score record);

	// 根据学生姓名和试卷名称查询考试成绩
	List<Score> selectByEtitleAndStuName(Score record);

	// 根据学生姓名查询考试成绩
	List<Score> selectByStuName(Score score);

	int selectCount(Score score);

	List<Score> selectScoreByStuName(String name);
}
