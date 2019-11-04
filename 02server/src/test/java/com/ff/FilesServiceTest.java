package com.ff;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.ff.pojo.MyFile;
import com.ff.serviceImpl.FilesServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FilesServiceTest {
	@Autowired
	private FilesServiceImpl filesServiceImpl;

	@Test
	public void FilesTest() {

		MyFile file = new MyFile();

		file.setUrl("123");
		file.setFileId("vedio123");
		filesServiceImpl.insertFile(file);

	}

}
