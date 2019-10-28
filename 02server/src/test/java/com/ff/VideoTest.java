package com.ff;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.ff.pojo.Msg;
import com.ff.service.VideoService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class VideoTest {
	@Autowired
	private VideoService videoService;

	@Test
	public void ChapterTest() {

	}

}
