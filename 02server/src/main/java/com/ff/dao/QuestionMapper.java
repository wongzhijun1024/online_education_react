package com.ff.dao;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.Question;

@Mapper
public interface QuestionMapper {

	int insert(Question question);

}