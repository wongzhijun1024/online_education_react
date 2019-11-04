package com.ff.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ff.pojo.Msg;
import com.ff.pojo.Teacher;
import com.ff.pojo.UploadMsg;
import com.ff.service.TeacherService;
import com.ff.util.CosTool;

@Controller
@RequestMapping("/noi")
public class TeacherController {
	@Autowired
	private TeacherService teacherService;

	/**
	 * 查询所有课程
	 * 
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET, value = "teachers")
	@ResponseBody
	public Msg selectTeachers() {

		return teacherService.selectTeachers();
	}

//	@ResponseBody
//	@RequestMapping(value = "addTeacher")
//	public Msg insertTeacher(Teacher teacher, HttpServletResponse resp, HttpServletRequest req) {
//
//		return teacherService.insertTeacher(teacher);
//	}

	@ResponseBody
	@RequestMapping(value = "teacherAdd")
	public Object insertTeacher(Teacher teacher, HttpServletResponse response, HttpServletRequest request) {
		System.out.print(teacher);
		return teacherService.insertTeacher(teacher, request);

	}
}
