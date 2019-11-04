package com.ff.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ff.pojo.Chapter;
import com.ff.pojo.Msg;
import com.ff.pojo.Question;
import com.ff.service.QuestionService;

@Controller
@RequestMapping("/noi")
public class QuestionController {
	@Autowired
	private QuestionService questionService;

	@RequestMapping(value = "question/add")
	@ResponseBody
	public Msg insertQuestion(Question question, HttpServletResponse resp, HttpServletRequest request) {

		return questionService.insert(question);
	}

	@RequestMapping(value = "question/and/chapterid")
	@ResponseBody
	public Msg selectQuestionbyid(Chapter chapter, HttpServletResponse resp, HttpServletRequest request) {

		return questionService.selectQuestionsByChapterid(chapter);
	}

}
