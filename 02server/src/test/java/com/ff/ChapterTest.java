package com.ff;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.ff.pojo.Chapter;
import com.ff.pojo.Course;
import com.ff.pojo.Msg;
import com.ff.service.ChapterService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ChapterTest {
	@Autowired
	private ChapterService chapterService;

	@Test
	public void chaptersAndall() {

		Msg msg = chapterService.selectAllChapter();

		System.out.println(msg);

	}

	@Test
	public void chaptersByCourseId() {

		Course course = new Course();
		course.setId(1);
		Msg msg = chapterService.selectChaptersByCourseId(course);

		System.out.println(msg);

	}

	@Test
	public void selectChaptersByName() {

		Chapter chapter = new Chapter();
		chapter.setName("继承");
		Msg msg = chapterService.selectChaptersByName(chapter);

		System.out.println(msg);

	}

	@Test
	public void addChapter() {

		Chapter chapter = new Chapter();
		chapter.setName("测试");
		chapter.setCourseId(2);
		chapter.setOrder(2);
		Msg msg = chapterService.insertChapter(chapter);

		System.out.println(msg);

	}

}
