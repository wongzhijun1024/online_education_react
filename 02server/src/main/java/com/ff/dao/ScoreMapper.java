package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.Score;
@Mapper
public interface ScoreMapper {
    int deleteByPrimaryKey(Integer scId);
    
    //保存学生考试成绩
    int insertScore(Score record);

    int insertSelective(Score record);

    Score selectByPrimaryKey(Integer scId);

    int updateByPrimaryKeySelective(Score record);

    int updateByPrimaryKey(Score record);
    
    //根据学生姓名和试卷名称查询考试成绩
    List<Score> selectByEtitleAndStuName(Score record);
    //根据学生姓名查询考试成绩
    List<Score> selectByStuName(Score score);
    int selectCount(Score score);
    
    List<Score> selectScoreByStuName(String name);
}