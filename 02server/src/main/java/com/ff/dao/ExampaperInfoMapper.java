package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.ExampaperInfo;
@Mapper
public interface ExampaperInfoMapper {
    int deleteByPrimaryKey(Integer id);

    int insertExampaperInfo(ExampaperInfo record);

    int insertSelective(ExampaperInfo record);

    ExampaperInfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ExampaperInfo record);

    int updateByPrimaryKey(ExampaperInfo record);
    
    /**
     * 根据试卷id删除
     * @param list
     * @return
     */
    int deleteByEid(List<String> list);
}