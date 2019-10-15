package com.ff.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ff.pojo.Msg;
import com.ff.pojo.Teacher;
import com.ff.service.TeacherService;

@Controller
@RequestMapping("/noi")
public class TeacherController {
	@Autowired
	private TeacherService teacherService;
	
	/**
	 * 查询所有课程
	 * @return
	 */
	@RequestMapping(method=RequestMethod.GET,value="teachers")
	@ResponseBody
	public Msg selectTeachers() {
		
		return teacherService.selectTeachers();
	}
	
	
	@ResponseBody
	@RequestMapping(value = "addTeacher")
	public Msg insertTeacher(Teacher teacher, HttpServletResponse resp, HttpServletRequest req) {
	
		return teacherService.insertTeacher(teacher);
	}
}
