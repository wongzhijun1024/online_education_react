package com.ff.service;

import javax.servlet.http.HttpServletRequest;

import com.ff.pojo.Msg;
import com.ff.pojo.Teacher;

public interface TeacherService {

	/**
	 * 查询所有的老师
	 * 
	 * @return 返回所有的老师
	 */
	Msg selectTeachers();

	/**
	 * 
	 * @param teacher          老师的文本数据
	 * @param multipartRequest 老师的图片数据
	 * @return 处理结果
	 */
	Msg insertTeacher(Teacher teacher, HttpServletRequest multipartRequest);
}
