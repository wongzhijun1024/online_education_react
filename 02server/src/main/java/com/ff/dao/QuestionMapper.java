package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.Question;
@Mapper
public interface QuestionMapper {
    int deleteByPrimaryKey(Integer qId);

    int insert(Question record);

    int insertSelective(Question record);

    Question selectByPrimaryKey(Integer qId);

    int updateByPrimaryKeySelective(Question record);

    int updateByPrimaryKey(Question record);
    
    //根据题型和难易程度查询题目
    List<Question> selectByTypeAndHard();
    
    /*
     * 分页查询和显示
     */
    List<Question> selectQuestion(Question q);
    
    int selectCount(Question q);
    
    List<Question> selectQuestionByeId(int id);
    
    
    int delBatchQuestion(List<String> list);
    
    List<Question> selectExampaper();
    
    List<Question> selectExampaperByTitle(String eTitle);
    
    //查询所有的题目
    List<Question> selectAllQuestion();
    //根据科目查询所有题
    List<Question> selectAllQuestionByQcourseAndQtypeAndQhard(Question q);
    
}