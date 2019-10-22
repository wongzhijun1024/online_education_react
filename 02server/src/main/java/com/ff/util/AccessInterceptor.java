package com.ff.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.ff.pojo.Admin;
import com.ff.pojo.Student;

public class AccessInterceptor implements HandlerInterceptor{
	//需要忽略的请求
	private static final String[] IGNORE_URI ={"/login.do","/loginCookie.do","/login","/valCode.do","/stulogin.do","/registStu.do","/updateMima.do","/exampaper.do"};
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object arg2) throws Exception {
		Boolean flag =false;
		String requestPath = request.getServletPath();
		for (String string : IGNORE_URI) {
			if (requestPath.contains(string)) {
			flag=true;
			break;
			}
		}
		//拦截请求
		if (!flag) {
			Admin admin = (Admin) request.getSession().getAttribute("admin");
			Student student = (Student) request.getSession().getAttribute("student");
			if (admin == null&&student==null) {
				request.setAttribute("me", "请先登录再访问网站");
				request.getRequestDispatcher("login.do").forward(request, response);
			
			}else{
				flag = true;
			}
		}
		return flag;
	}
	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
	}



}
