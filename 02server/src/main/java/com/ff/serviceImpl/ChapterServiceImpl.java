package com.ff.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ff.dao.ChapterMapper;
import com.ff.pojo.Chapter;
import com.ff.pojo.Course;
import com.ff.pojo.Msg;
import com.ff.service.ChapterService;

@Service
public class ChapterServiceImpl implements ChapterService{

	@Autowired
	private ChapterMapper chapterMapper;

	@Override
	public Msg selectAllChapter() {
		List<Chapter> list = chapterMapper.getAllChapter();
		Msg msg = new Msg();
		msg.setCode(1);
		msg.setObject(list);
		return msg;
	}

	@Override
	public Msg selectChaptersByCourseId(Course course) {
		Msg msg = new Msg();
		//根据科目id获得对应的课程列表
		List<Chapter> chapters=chapterMapper.getChaptersByCourseId(course.getId());
		if(chapters.size()==0) {
			msg.setCode(2);
			msg.setMsg("没有("+course.getName()+")对应的章节，请添加章节");
		}else {
			msg.setCode(1);
			msg.setObject(chapters);	
		}
		return msg;
	}

	@Override
	public Msg insertChapter(Chapter chapter) {
		
		Msg msg = new Msg();
		if(chapterMapper.insert(chapter)==1) {
			msg.setCode(1);
			msg.setMsg("添加章节("+chapter.getName()+")成功!");
			msg.setObject(chapter);
		}else {
			msg.setCode(1);
			msg.setMsg("添加章节("+chapter.getName()+")失败!");
			msg.setObject(chapter);
		}
		
		return msg;
	}



}
