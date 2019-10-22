package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.Admin;
import com.ff.pojo.Student;
@Mapper
public interface StudentMapper {
    int deleteByPrimaryKey(Integer sId);

    int insert(Student record);

    int insertSelective(Student record);

    Student selectByPrimaryKey(Integer sId);

    int updateByPrimaryKeySelective(Student record);
    
    int delBatchStu(List<String> list);

    int updateByPrimaryKey(Student record);
    
    Student login(Student s);
    
    List<Student> selectStu(Student s);
    
    int selectCount(Student s);
    
    int updateMiMa(Student a);
}