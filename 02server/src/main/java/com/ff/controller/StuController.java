package com.ff.controller;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ff.pojo.Student;
import com.ff.service.StuService;
import com.ff.util.MdFive;

@Controller
public class StuController {
	
	@Autowired
	StuService stuService;
	@Autowired
	MdFive mdFive;
	
	
	 /**
	  * 登录界面注册学生用户
	  * @param s
	  * @return
	  */
	 
	@RequestMapping(method=RequestMethod.POST,value="registStu.do",produces={"text/html;charset=UTF-8"})
	@ResponseBody
	public String addStu(Student s){
		if(s!=null){
			try {
				//加密
				s.setsPwd(mdFive.EncoderByMdFive(s.getsPwd()));
			} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				
			}
		}
		if(stuService.insert(s)> 0) {
			return "注册成功!";
		}
		return "注册失败";
	}
	
	 /**
	  * 学生登录
	  * @param red
	  * @param s
	  * @param resp
	  * @param req
	  * @return
	  */
	@RequestMapping(method=RequestMethod.POST,value="stulogin.do")
	public String loginCookie(RedirectAttributes red,Student s,HttpServletResponse resp,HttpServletRequest req) {
		if(s!=null){
			try {
				//加密
				s.setsPwd(mdFive.EncoderByMdFive(s.getsPwd()));
			} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				
			}
		}
		if(stuService.login(s)) {
				HttpSession session = req.getSession();
				//session中的验证码
				String v = "" ;
				if(session.getAttribute("valCode")!=null){
					v = session.getAttribute("valCode")+"";
				}
				//如果验证码输入正确
				if(v.equalsIgnoreCase(s.getValCode()) ){
					session.setAttribute("student",s);
						return "student";
				}else{
					red.addFlashAttribute("info", "验证码输入错误......");
				}
				
		}else{
			red.addFlashAttribute("info",  "账号、密码或者用户类型填写错误......");
		}
			
		return "redirect:login.do";
	}
	
	
	
	  /**
	   * 首页点击学生跳转学生页面
	   * @return
	   */
	 
	@RequestMapping(method=RequestMethod.GET,value="studentEasyui.do")
	public String studentEasyui1(){

		return "stueasyui";
	}
	
	  /**
	   * 分页查询学生显示界面
	   * @param rows
	   * @param page
	   * @param sName
	   * @return
	   */
	 
	@RequestMapping(method=RequestMethod.POST,value="studentEasyuiList.do")
	@ResponseBody
	public HashMap studentEasyui(int rows,int page,String sName){
		HashMap map = new HashMap();
		Student s = new Student();
		s.setRow(rows);
		s.setPage(rows*(page-1));
		//如果不是空，说明传过来的就是查询，进去执行查询语句。
		if(null!=sName && !"".equals(sName)){
			s.setsName("%"+sName+"%");
		}
		//总条数
		map.put("total", stuService.selectCount(s));
		//查询所有数据
		map.put("rows", stuService.selectStu(s));
		return map;
	}
	
	/*
	 * 新增学生
	 */
	@RequestMapping(method=RequestMethod.POST,value="stuAdd.do",produces={"text/html;charset=UTF-8"})
	@ResponseBody
	public String stuAdd(Student s){
		if(s!=null){
			try {
				//加密
				s.setsPwd(mdFive.EncoderByMdFive(s.getsPwd()));
			} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(stuService.insertSelective(s) > 0) {
			return "新增成功";
		}
		return "新增失败";
	}
	
	/*
	 * 修改学生信息
	 */
	@RequestMapping(method=RequestMethod.POST,value="stuUpdate.do",produces={"text/html;charset=UTF-8"})
	@ResponseBody
	public String stuUpdate(Student s){
		if(s!=null){
			try {
				//加密
				s.setsPwd(mdFive.EncoderByMdFive(s.getsPwd()));
			} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				
			}
		}
		if(stuService.updateByPrimaryKeySelective(s) > 0) {
			return "修改成功";
		}
		return "修改失败";
	} 
	
	/*
	 * 删除和批量删除学生
	 */
	@RequestMapping(method=RequestMethod.POST,value="delBatchStu.do", produces={"text/html;charset=UTF-8"})
	@ResponseBody
	public String delBatchStu(String id){
		String arr[];
		List<String> list = new ArrayList<String>();
		if(id!=null&&!"".equals(id)){
			//字符串转换成数组
			arr=id.split(",");
			//数组转换成集合
			list =Arrays.asList(arr);
		}
		if(stuService.delBatchStu(list)>0){
			return "删除成功";
		}
		return "删除失败";
	}
	
	/*
	 * 修改密码和忘记密码
	 */
	@RequestMapping(method=RequestMethod.POST,value="updateMima.do",produces={"text/html;charset=UTF-8"})
	@ResponseBody
	public String UpdatePwd(Student s){
		System.out.println(s);
		if(s!=null){
			try {
				//加密
				s.setsPwd(mdFive.EncoderByMdFive(s.getsPwd()));
			} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return "加密出错";
			}
		}
		if(stuService.updateMiMa(s) > 0) {
			return "修改成功";
		}
		return "用户名输入错误！";
	} 
	/*
	 * 注销登录
	 */
		@RequestMapping(method=RequestMethod.GET,value="logOut.do")
		@ResponseBody
		public int logOut(HttpServletRequest req,HttpServletResponse resp){
			//取出cookie，返回的数组形式
			Cookie cookie[]=req.getCookies();
			//判断cookie是否存在
			if(cookie!=null&&cookie.length>0){
				for(Cookie c:cookie){
						//删除cookie的时候要设置path,还要用 response添加
						c.setMaxAge(0);
						c.setPath("/examSystem");
						resp.addCookie(c);
						return 1;
				}
			}
			return 0;
		}
		
	/**
	 * 跳转到选择试卷页面
	 * @return
	 */
	@RequestMapping(method=RequestMethod.GET,value="ExampaperList.do")
	public String ExampaperList(){
		return "ExampaperList";
	}
	
	/**
	 * 查询成绩
	 * @return
	 */
	@RequestMapping(value="getScore.do")
	public String getScore() {
		return "getScore";
	}
	
	/**
	 * 在线练习
	 * @return
	 */
	@RequestMapping(value="Practice.do")
	public String Practice() {
		return "practice";
	}
}
