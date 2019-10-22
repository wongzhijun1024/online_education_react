package com.ff.dao;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.ForgetPwd;
@Mapper
public interface ForgetPwdMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ForgetPwd record);

    int insertSelective(ForgetPwd record);

    ForgetPwd selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ForgetPwd record);

    int updateByPrimaryKey(ForgetPwd record);
}