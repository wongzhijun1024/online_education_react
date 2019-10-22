package com.ff.serviceImpl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ff.dao.TeacherMapper;
import com.ff.pojo.Msg;
import com.ff.pojo.Teacher;
import com.ff.pojo.Topic;
import com.ff.service.TeacherService;
import com.ff.util.CosTool;

@Service
public class TeacherServiceImpl implements TeacherService {

	@Autowired
	TeacherMapper teacherMapper;

	@Override
	public Msg selectTeachers() {

		Msg msg = new Msg();
		msg.setObject(teacherMapper.selectTeachers());
		msg.setCode(1);

		return msg;
	}

	@Override
	public Msg insertTeacher(Teacher teacher, HttpServletRequest request) {

		Msg msg = new Msg();

		// 查询是否已经存在该老师
		if (teacherMapper.selectTeacher(teacher.getName()) != null) {
			msg.setCode(2);
			msg.setMsg("已经存在(" + teacher.getName() + ")老师");
			return msg;
		}

		if (!(request instanceof MultipartHttpServletRequest)) {
			msg.setMsg("请求类型不对");
			return msg;
		}

		// 获得文件数据流，表单数据和图片一起提交给后台,图片是以二进制对象形式
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		List<String> keyList = null;

		try {

			CosTool cosTool = new CosTool();
			List<MultipartFile> list = multipartRequest.getFiles("files");
			keyList = cosTool.uploadFile(CosTool.VIDEO_FOLDER, list);
		} catch (Exception e1) {

		}

		teacher.setTkey(keyList.get(0));

		// 增加老师
		Topic buffer = null;
		if (teacherMapper.insert(teacher) == 1) {
			msg.setCode(1);
			msg.setObject(buffer);
			msg.setMsg("添加(" + teacher.getName() + ")老师成功!");
		} else {
			msg.setCode(-1);
			msg.setMsg("添加(" + teacher.getName() + ")老师失败!");
		}

		return msg;
	}

}
