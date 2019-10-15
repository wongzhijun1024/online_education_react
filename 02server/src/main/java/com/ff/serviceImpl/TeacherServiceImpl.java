package com.ff.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ff.dao.TeacherMapper;
import com.ff.dao.TopicMapper;
import com.ff.pojo.Msg;
import com.ff.pojo.Teacher;
import com.ff.pojo.Topic;
import com.ff.service.TeacherService;
import com.ff.service.TopicService;
@Service
public class TeacherServiceImpl implements TeacherService{

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
	public Msg insertTeacher(Teacher teacher) {
		Msg msg = new Msg();		
		//查询是否已经存在该老师
		if(teacherMapper.selectTeacher(teacher.getName())!=null) {
			msg.setCode(2);
			msg.setMsg("已经存在("+teacher.getName()+")老师");
		}else {
			//增加老师
			Topic buffer=null;
			if(teacherMapper.insert(teacher)==1) {
				msg.setCode(1);
				msg.setObject(buffer);
				msg.setMsg("添加("+teacher.getName()+")老师成功!");
			}else {
				msg.setCode(-1);
				msg.setMsg("添加("+teacher.getName()+")老师失败!");
			}

			
		}
				
		return msg;
	}

	

}
