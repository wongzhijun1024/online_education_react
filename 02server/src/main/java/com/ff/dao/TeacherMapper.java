package com.ff.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.ff.pojo.Teacher;
@Mapper
public interface TeacherMapper {
	/**
	 * 查询所有老师
	 * @return 返回所有的老师
	 */
    List<Teacher> selectTeachers();
    
    /**
     *  插入新老师
     * @param Teacher  插入新老师
     * @return 是否插入成功
     */
    int insert(Teacher teacher);
    
    /**
     *  删除老师
     * @param Teacher  删除的老师
     * @return  是否删除成功
     */
     int delTeacher(Teacher teacher);
     
     /**
 	 * 查询指定老师
 	 * @return 老师对象
 	 */
     Teacher selectTeacher(String name);
}