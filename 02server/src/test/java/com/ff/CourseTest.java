package com.ff;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.ff.pojo.Msg;
import com.ff.service.CourseService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CourseTest {
	@Autowired
	private CourseService courseService;

	@Test
	public void coursesAndall() {

		Msg msg = courseService.selectCourseAll();

		System.out.print(msg);
	}

	@Test
	public void coursesAndallAndleaf() {

		Msg msg = courseService.selectCourseAllLeaf();

		System.out.print(msg);
	}

	@Test
	public void coursesAndChapters() {

		Msg msg = courseService.selectCourseAndChapters();

		System.out.print(msg);
	}

	@Test
	public void selectAllQuestionsOfCourses() {

		Msg msg = courseService.selectAllQuestionsOfCourses();

		System.out.print(msg);
	}

}
