package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.ExamChapter;

@Mapper
public interface ExamMapper {

	/**
	 * 插入章节的试卷
	 * 
	 * @param examChapter
	 * @return
	 */
	int insertExamForChapter(List<ExamChapter> examChapters);

}