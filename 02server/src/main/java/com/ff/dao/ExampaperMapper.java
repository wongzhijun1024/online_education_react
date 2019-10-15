package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.Exampaper;
@Mapper
public interface ExampaperMapper {
    int deleteByPrimaryKey(Integer eId);
    
    /*
	  * 删除和批量删除
	  */
	int delBatchExampaper(List<String> list);
    
    /**
     * 新增试题
     * @param record
     * @return
     */
    int insertExampaper(Exampaper record);

    int insertSelective(Exampaper record);

    Exampaper selectByPrimaryKey(Integer eId);
    
    Exampaper selectByEtitle(String eTitle);

    int updateByPrimaryKeySelective(Exampaper record);

    int updateByPrimaryKey(Exampaper record);
    
    List<Exampaper> selectExam();
    
    /*
     * 查询所有试卷
     */
    List<Exampaper> selectAllExampaper(Exampaper e);

	int selectCount(Exampaper e);
	/**
	 * 查询试卷
	 * @param e
	 * @return
	 */
	List<Exampaper> selectExampaper(Exampaper e);
}