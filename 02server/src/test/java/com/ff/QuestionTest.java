package com.ff;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.ff.pojo.Msg;
import com.ff.pojo.Question;
import com.ff.service.QuestionService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QuestionTest {
	@Autowired
	private QuestionService questionService;

	@Test
	public void insertTest() {

		Question question = new Question();

		question.setTitle("第4个选择题");
		question.setTextA("第一个选项");
		question.setTextB("第二个选项");
		question.setTextC("第三个选项");
		question.setTextD("第四个选项");
		question.setChapterId(2);
		question.setAnswer("textA");

		System.out.println(questionService.insert(question));
	}

	@Test
	public void selectQuestionsAll() {

		Msg msg = questionService.selectQuestionsAll();

		System.out.println(msg);
	}

}
