package com.ff.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ff.pojo.Exam;
import com.ff.pojo.ExamChapter;
import com.ff.pojo.Msg;
import com.ff.service.ExamService;

@Controller
@RequestMapping("/noi")
public class ExamController {
	@Autowired
	private ExamService examService;//to-lay-down

	@RequestMapping(value = "insert/exam/chapter")
	@ResponseBody
	public Msg selectVideosByChapterId(Exam exams, HttpServletResponse resp, HttpServletRequest req) {

		ArrayList<ExamChapter> examChapters = new ArrayList<ExamChapter>();

		int questionIds[] = exams.getQuestionIds();
		for (int i = 0; i < questionIds.length; i++) {

			ExamChapter examChapter = new ExamChapter();
			examChapter.setChapterId(exams.getChapterId());
			examChapter.setQuestionId(questionIds[i]);

			examChapters.add(examChapter);

		}

		return examService.insertExamForChapter(examChapters);
	}

}
