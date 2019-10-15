package com.ff.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ff.dao.CourseMapper;
import com.ff.pojo.Course;
import com.ff.pojo.Msg;
import com.ff.pojo.Topic;
import com.ff.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseMapper courseMapper;

	public Msg selectAllCourse() {

		Msg msg = new Msg();

		msg.setCode(1);

		msg.setObject(courseMapper.selectAllCourse());

		return msg;
	}

	@Override
	public Msg selectCoursesByTopicId(Topic topic) {
		Msg msg = new Msg();
		// 根据科目id获得对应的课程列表
		List<Course> courses = courseMapper.getCoursesByTopicId(topic.getId());
		if (courses.size() == 0) {
			msg.setCode(2);
			msg.setMsg("没有科目(" + topic.getName() + ")对应的课程，请添加课程");
		} else {
			msg.setCode(1);
			msg.setObject(courseMapper.getCoursesByTopicId(topic.getId()));
		}
		return msg;
	}

	@Override
	public Msg insertCourses(Course course) {
		Msg msg = new Msg();
		// 判断数据库是否有该课程
		if (courseMapper.getCourseByName(course.getName()) != null) {
			msg.setCode(2);
			msg.setMsg("已经存在(" + course.getName() + ")课程");
		} else {
			if (courseMapper.insert(course) == 1) {
				msg.setCode(1);
				msg.setObject(course);
				msg.setMsg("增加(" + course.getName() + ")课程成功!");
			} else {
				msg.setCode(3);
				msg.setMsg("增加(" + course.getName() + ")课程失败!");
			}
		}
		;

		return msg;
	}

}
