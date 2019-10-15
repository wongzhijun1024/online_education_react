package com.ff.service;

import java.util.List;

import com.ff.pojo.Exampaper;

public interface ExampaperService {

	 int selectCount(Exampaper e);

	 List<Exampaper> selectExampaper(Exampaper e);
	
	 //新增试题
	 int insertExampaper(Exampaper record);
	 
	 //根据id删除试卷
	 int deleteByPrimaryKey(Integer eId);
	 
	 //根据试卷名称查询试卷
	 Exampaper selectByEtitle(String eTitle);
	 
	// 删除和批量删除
	int delBatchExampaper(List<String> list);
	
	//查询所有试卷
    List<Exampaper> selectAllExampaper(Exampaper e);
}
