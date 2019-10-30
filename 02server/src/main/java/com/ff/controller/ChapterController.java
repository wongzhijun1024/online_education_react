package com.ff.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ff.pojo.Chapter;
import com.ff.pojo.Course;
import com.ff.pojo.Msg;
import com.ff.service.ChapterService;

@Controller
@RequestMapping("/noi")
public class ChapterController {
	@Autowired
	private ChapterService chapterService;

	/**
	 * 根据科目的ID查询对应的课程
	 * 
	 * @return
	 */
	@RequestMapping(value = "chapters/all")
	@ResponseBody
	public Msg selectAllChapter() {
		return chapterService.selectAllChapter();
	}

	/**
	 * 根据科目的ID查询对应的课程
	 * 
	 * @return
	 */
	@RequestMapping(value = "chaptersByCourseId")
	@ResponseBody
	public Msg selectChaptersByCourseId(Course course, HttpServletResponse resp, HttpServletRequest req) {
		return chapterService.selectChaptersByCourseId(course);
	}

	@RequestMapping(value = "chaptersByName")
	@ResponseBody
	public Msg selectChaptersByName(Chapter chapter, HttpServletResponse resp, HttpServletRequest req) {

		return chapterService.selectChaptersByName(chapter);
	}

	@RequestMapping(value = "chapter/add")
	@ResponseBody
	public Msg addChapter(Chapter chapter, HttpServletResponse resp, HttpServletRequest req) {

		return chapterService.insertChapter(chapter);
	}

}
