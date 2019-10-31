package com.ff.service;

import java.util.List;

import com.ff.pojo.ExamChapter;
import com.ff.pojo.Msg;

public interface ExamService {

	/**
	 * 根据科目的id号查询科目
	 * 
	 * @return
	 */
	Msg insertExamForChapter(List<ExamChapter> examChapter);

}
