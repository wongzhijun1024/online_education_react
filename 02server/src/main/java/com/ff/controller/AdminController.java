package com.ff.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ff.pojo.Admin;
import com.ff.pojo.Msg;
import com.ff.service.AdminService;

@CrossOrigin(origins = { "http://localhost:3000", "null" })
@Controller
@RequestMapping("/noi")
public class AdminController {
	@Autowired
	AdminService adminService;

	/*
	 * 项目入口 进入登录页面
	 * 
	 */
	@ResponseBody
	@RequestMapping(value = "adminCheck")
	public Msg loginPage(Admin admin, HttpServletRequest req, HttpServletResponse resp) {
		return adminService.check(admin);
	}

}
