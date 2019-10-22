package com.ff.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ff.pojo.Exampaper;
import com.ff.pojo.Question;
import com.ff.pojo.Score;
import com.ff.pojo.Student;
import com.ff.service.ExampaperService;
import com.ff.service.QuestionService;
import com.ff.util.MdFive;
@RequestMapping("/noi")  
@Controller
public class QuestionController {
	
	@Autowired
	QuestionService questionService;
	@Autowired
	MdFive mdFive;
	@Autowired
	ExampaperService exampaperService;
	
	
	/**
	 * 显示随机试题
	 * @param num
	 * @param question
	 * @return
	 */
	@RequestMapping(value="getQuestions.do")
	@ResponseBody
	public List<Question> getQuestions(int num,Question question) {	
		//存放产生的随机题目编号
		Set<Integer> hashSetNum = new HashSet<>();
		
		//根据前端传入的科目、题型和难易程度查询数据库，并保存在list中
		List<Question> list = new ArrayList<>();
		list = questionService.selectAllQuestionByQcourseAndQtypeAndQhard(question);
		//存放题目，传入前端
		List<Question> questionlist=new ArrayList<>();
		
		if (list!=null&&list.size()>0) {
			do {
				//产生随机数
				int questionNum = (int)(Math.random()*(list.size()));
				//装进集合中
				hashSetNum.add(questionNum);
			} while (hashSetNum.size()<num);
		}

	for (Integer i : hashSetNum) {
		//在list中取出hashSetNum中存入编号对应的题目，并存入questionlist
		questionlist.add(list.get(i));
	}
		return questionlist;
	}
	
	
	  
	 /**
	  * 显示试题界面
	  * @return
	  */
	 
	@RequestMapping(value="question.do")
	public String question() {
		return "question";
	}
	
	  /**
	   * 显示试题信息和查询
	   * @param rows
	   * @param page
	   * @param question
	   * @return
	   */
	 
	@RequestMapping(method=RequestMethod.POST,value="selectQuestion.do")
	@ResponseBody
	public HashMap selectQuestion(int rows,int page,String question){
		HashMap map = new HashMap();
		Question q = new Question();
		q.setRow(rows);
		q.setPage(rows*(page-1));
		//如果不是空，说明传过来的就是查询，进去执行查询语句。
		if(null!=question && !"".equals(question)){
			q.setQuestion("%"+question+"%");
		}
		//总条数
		map.put("total", questionService.selectCount(q));
		//查询所有数据
		map.put("rows", questionService.selectQuestion(q));
		return map;
	}
	
	/**
	 * 查询所有试题
	 * @return
	 */
	@RequestMapping("getAllQuestion.do")
	@ResponseBody
	public List<Question> getAllQuestion() {
		List<Question> list = questionService.selectAllQuestion();
		return list;
	}
	  /**
	   * 新增试题
	   * @param q
	   * @return
	   */
	@RequestMapping(method=RequestMethod.POST,value="questionAdd.do",produces={"text/html;charset=UTF-8"})
	@ResponseBody
	public String questionAdd(Question q){
		
		if(questionService.insertSelective(q) > 0) {
			return "新增成功";
		}
		return "新增失败";
	}
	  /**
	   * 修改试题信息
	   * @param q
	   * @return
	   */
	 
	@RequestMapping(method=RequestMethod.POST,value="questionUpdate.do",produces={"text/html;charset=UTF-8"})
	@ResponseBody
	public String questionUpdate(Question q){
		
		if(questionService.updateByPrimaryKeySelective(q) > 0) {
			return "修改成功";
		}
		return "修改失败";
	} 
	
	  /**
	   * 删除和批量删除试题
	   * @param id
	   * @return
	   */
	 
	@RequestMapping(method=RequestMethod.POST,value="delBatchQuestion.do", produces={"text/html;charset=UTF-8"})
	@ResponseBody
	public String delBatchQuestion(String id){
		String arr[];
		List<String> list = new ArrayList<String>();
		if(id!=null&&!"".equals(id)){
			//字符串转换成数组
			arr=id.split(",");
			//数组转换成集合
			list =Arrays.asList(arr);
		}
		if(questionService.delBatchQuestion(list)>0){
			return "删除成功";
		}
		return "删除失败";
	}
	
	/**
	 * 根据试卷名查询试卷
	 * @param eTitle
	 * @return
	 */
	@RequestMapping("getExampaperByTitle.do")
	@ResponseBody
	public List<Question> getExampaperByTitle(String eTitle) {
		return questionService.selectExampaperByTitle(eTitle);
	}
	

	/**
	 * 跳转到考试页面
	 * @param eTitle
	 * @param request
	 * @return
	 */
	@RequestMapping(value="startExam.do")
	public String startExam(String eTitle,HttpServletRequest request) {
		//取出考生信息
		//从session中取出学生信息
		Student student = (Student) request.getSession().getAttribute("student");
		//根据试卷名称查询出试卷
		//根据title把试卷查出来
		Exampaper exampaper= exampaperService.selectByEtitle(eTitle);
		//将eTitle存入session
		//设置试卷名
		request.getSession().setAttribute("eTitle", eTitle);
		//将试卷放入request
		request.setAttribute("exampaper", exampaper);
		//将学生姓名放入request
		request.setAttribute("sName", student.getsName());
		//得到考试时间的分钟数（数据库存放的小时）
		Integer time = exampaper.getValidatetime()*60;
		//设置试卷时间
		request.setAttribute("time", time);
		return "startExamPage";
	}
	
	
	/**
	 * 查询考试试卷
	 * @param req
	 * @return
	 */
	@RequestMapping(value="getExampaper.do")
	@ResponseBody
	public List<Question> getExampaper(HttpServletRequest req) {
		//从session中取出eTitle，查询相应的试卷并返回
		String eTitle = (String) req.getSession().getAttribute("eTitle");
		return questionService.selectExampaperByTitle(eTitle);
	}
}
