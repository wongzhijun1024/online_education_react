package com.ff.service;

import java.util.List;

import com.ff.pojo.Admin;
import com.ff.pojo.Student;

public interface StuService {
	/*
	 * 注册、增加
	 */
	int insert(Student record);
	
	/*
	 * 登录
	 */
	boolean login(Student s);
	
	/*
	 * 修改学生信息
	 */
	int updateByPrimaryKey(Student s);
	
	/*
	 * easyui界面分页显示学生
	 */
	List<Student> selectStu(Student s);
	/*
	 * 分页查询  
	 */
	int selectCount(Student s);
	
	/*
	 * 删除和批量删除
	 */
	int delBatchStu(List<String> list);
	
	/*
	 * 增加学生
	 */
	int insertSelective(Student record);

	/*
	 * 修改学生
	 */
    int updateByPrimaryKeySelective(Student record);
    /*
     * 主页面修改密码
     */
    int updateMiMa(Student a);
}
