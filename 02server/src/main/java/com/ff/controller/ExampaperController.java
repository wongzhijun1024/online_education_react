package com.ff.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ff.pojo.Exampaper;
import com.ff.pojo.ExampaperInfo;
import com.ff.pojo.Score;
import com.ff.pojo.Student;
import com.ff.service.ExampaperInfoService;
import com.ff.service.ExampaperService;
import com.ff.service.ScoreService;
@RequestMapping("/noi") 
@Controller
public class ExampaperController {
	
	@Autowired
	private ExampaperService exampaperService;
	
	@Autowired
	ExampaperInfoService exampaperInfoService;
	
	@Autowired
	ScoreService scoreService;
	//进入试卷页面
	@RequestMapping("exam.do")
	public String exam() {
		return "exam";
	}
	
	
	  
	 /**
	  * 分页查询试卷显示界面
	  * @param rows
	  * @param page
	  * @param eTitle
	  * @return
	  */
	 
	@RequestMapping(method=RequestMethod.POST,value="exampaper.do")
	@ResponseBody
	public HashMap exampaper(int rows,int page,String eTitle){
		//创建一个map对象
		HashMap map = new HashMap();
		//创建一个exampaper对象
		Exampaper e = new Exampaper();
		//设置行
		e.setRow(rows);
		//设置页
		e.setPage(rows*(page-1));
		//如果不是空，说明传过来的就是查询，进去执行查询语句。
		if(null!=eTitle && !"".equals(eTitle)){
			e.seteTitle("%"+eTitle+"%");
		}
		//总条数
		map.put("total", exampaperService.selectCount(e));
		//查询所有数据
		map.put("rows", exampaperService.selectExampaper(e));
		return map;
	}
	
	
//	/**
//	 *  试卷浏览
//	 * @param eTitle
//	 * @param request
//	 * @param s
//	 * @return
//	 */
//	 
//	@RequestMapping("viewPaper.do")
//	public String viewPaper(String eTitle,HttpServletRequest request,HttpSession s ) {
//		s.setAttribute("eTitle", eTitle);
//		return "viewPaper";
//	
//	}
	/**
	 * 跳转增加试卷页面
	 * @return
	 */
	@RequestMapping("addExampaper.do")
	public String toAddExampaper() {
		return "addExampaper";
	}
	
	/**
	 * 增加试卷
	 * @param request
	 * @param examPaperInfo
	 * @param qIds
	 * @param response
	 * @return
	 */
	@RequestMapping(method=RequestMethod.POST, value="addPaper.do")
	@ResponseBody
	public String addPaper(HttpServletRequest request,String examPaperInfo,String qIds, HttpServletResponse response) {
		//把传过来的exampaperinfo转换成数组
		String[]  examPaperInfos = examPaperInfo.split(",");
		String eTitle=examPaperInfos[0];
		int validateTime=Integer.parseInt(examPaperInfos[1]);
		int fulscore=Integer.parseInt(examPaperInfos[2]);
		String course=examPaperInfos[3];
		String[] qId = qIds.split(",");
		Date creatTime =new Date();
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String CreatTime2=simpleDateFormat.format(creatTime);
		System.out.println(creatTime);
		Calendar c = Calendar.getInstance();
		c.add(Calendar.MONTH, 2);
		Date validity = c.getTime();
		String validity2=simpleDateFormat.format(validity);
		Exampaper exampaper = new Exampaper(eTitle, CreatTime2, validateTime, validity2, fulscore, course);
		int r=exampaperService.insertExampaper(exampaper);
		Exampaper exampaper2 = exampaperService.selectByEtitle(eTitle);
		for (String string : qId) {
			int questionId = Integer.parseInt(string);
			exampaperInfoService.insertExampaperInfo(new ExampaperInfo(exampaper2.geteId(), questionId, fulscore));
		}
		if(r>0){
			return "ok";
		}else{
			return "shibai";
		}
	}
	
	/**
	 * 删除或批量删除试卷
	 * @param id
	 * @return
	 */
	@RequestMapping(value="delExampaperByBatch.do", produces={"text/html;charset=UTF-8"})
	@ResponseBody
	public String delBatchExampaper(String id) {
		//定义一个数组存放试卷id
		String arr[];
		List<String> list = new ArrayList<String>();
		if(id!=null&&!"".equals(id)){
			//字符串转换成数组
			arr=id.split(",");
			//数组转换成集合
			list =Arrays.asList(arr);
		}
		int r = exampaperService.delBatchExampaper(list);
		if (r>0) {
			return "删除成功";
		}else {
			return "删除失败";
		}
	}
	
	/**
	 * 查询所有试题
	 * @param request
	 * @return
	 */
	@RequestMapping(value="getAllExampaper.do")
	@ResponseBody
	public List<Exampaper> getAllExampaper(int rows,int page,HttpServletRequest request) {
		Exampaper exampaper = new Exampaper();
		exampaper.setRow(rows);
		exampaper.setPage(rows*(page-1));
		List<Exampaper> list = exampaperService.selectAllExampaper(exampaper);
		//先把所有的试题放在一个集合中
		//取出考生的信息
		Student student = (Student) request.getSession().getAttribute("student");
		//取出考生的名字
		String  stuName=student.getsName();
		//创建一个集合存放所有的试卷
		List<Exampaper> listMiddle=new ArrayList<>();
		//存放最终查询显示的试卷
		List<Exampaper> listToJsp=new ArrayList<>();
		//遍历所有试卷，将在有效期内的试卷取出放入listMiddle
		for (Exampaper exampaper2 : list) {
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			try {
				Date creatTimeFirst = sdf.parse(exampaper2.getCreattime());
				Date ValidityFirst = sdf.parse(exampaper2.getValidity());
				Date date = new Date();
				if (creatTimeFirst.compareTo(date)<0&&ValidityFirst.compareTo(date)>0) {
					listMiddle.add(exampaper2);
				}
			} catch (ParseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
		//遍历所有有效期内的试卷，将还未考试的试卷取出放入listToJsp
			for (Exampaper exampaper3 : listMiddle) {
				List<Score> list2 = scoreService.selectByEtitleAndStuName(new Score(stuName, exampaper3.geteTitle()));
			if(list2.size()==0){
				listToJsp.add(exampaper3);
			}
		}
		return listToJsp;
	}
}
