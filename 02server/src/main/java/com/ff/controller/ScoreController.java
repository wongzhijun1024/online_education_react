package com.ff.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ff.pojo.Admin;
import com.ff.pojo.Score;
import com.ff.pojo.Topic;
import com.ff.pojo.Student;
import com.ff.service.ScoreService;

@Controller
@RequestMapping("/noi") 
public class ScoreController {
	@Autowired
	ScoreService scoreService;

	   /**
	    * 交卷判分
	    * @param time
	    * @param answer
	    * @param stuAnswer
	    * @param request
	    * @return
	    */
		@RequestMapping(value="getScores.do",produces={"text/html;charset=UTF-8"})
		@ResponseBody
		public String getScore(String time ,String answer,String stuAnswer,HttpServletRequest request) {
			//取出考生名
			Student student = (Student) request.getSession().getAttribute("student");
			//取出试卷名
			String eTitle = (String) request.getSession().getAttribute("eTitle");
			//将正确答案放在数组中
			String[]  trueAnswer = answer.split(",");
			//将考生答案放在数组中
			String[] stuAnswers = stuAnswer.split(",");
			//定义一个计算分数的变量
			int finalScore=0;
			//如果考试剩余时间不为0
			if(!("0".equals(time))) {
				if (stuAnswers.length<trueAnswer.length) {
					return "还有题目未完成";
				}else{
					for(int i = 0;i<trueAnswer.length;i++){
						if(trueAnswer[i].equals(stuAnswers[i])){
							finalScore+=10;
						}
					}
					//保存学生考试成绩
					scoreService.insertScore(new Score(student.getsName(), finalScore, eTitle));
					return finalScore+"";
				}
			} else {
				
				for(int i = 0;i<trueAnswer.length;i++){
					if(trueAnswer[i].equals(stuAnswers[i])){
						finalScore+=10;
					}
				}
				//保存学生考试成绩
				scoreService.insertScore(new Score(student.getsName(), finalScore, eTitle));
				return finalScore+"";
			}
		}
		
		/**
		 * 查询学生所有考试成绩
		 * @param name
		 * @param request
		 * @return
		 */
		@RequestMapping(value="toGetScore.do")
		@ResponseBody
		public HashMap selectScore(int rows,int page,HttpServletRequest request ) {
			//取出考生信息
			Student student = (Student) request.getSession().getAttribute("student");
			HashMap map = new HashMap();
			Score score = new Score();
			score.setRow(rows);
			score.setPage(rows*(page-1));
			score.setStudentName(student.getsName());
			//总条数
			int num = scoreService.selectCount(score);
			map.put("total", scoreService.selectCount(score));
			//查询所有数据
			map.put("rows", scoreService.selectByStuName(score));
			return map;
			//根据考试名字查询成绩
		}
		
		/**
		 * 得到考试分数
		 * @param sName
		 * @return
		 */
		@RequestMapping(value="getStuScore.do")
		@ResponseBody
		public List<Score> getStuScore(String sName) {
			List<Score> list = scoreService.selectScoreByStuName(sName);
			return list;
		}
		
		/**
		 * 考生分数列表
		 * @param sName
		 * @param req
		 * @return
		 */
		@RequestMapping(value="stuScorePage.do")
		public String stuScorePage(String sName,HttpServletRequest req) {
			req.setAttribute("sName", sName);
			return "stuScorePage";
		}
}
