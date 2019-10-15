package com.ff.service;

import com.ff.pojo.Msg;
import com.ff.pojo.Teacher;
public interface TeacherService {
	
	/**
	 * 查询所有的老师
	 * @return  返回所有的老师
	 */
	Msg selectTeachers();
	

	/**
	 * 增加老师
	 * @param 增加的老师对象
	 * @return 返回增加的老师对象
	 */
	Msg insertTeacher(Teacher teacher);
}
