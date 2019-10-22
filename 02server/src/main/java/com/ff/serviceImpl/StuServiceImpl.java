package com.ff.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ff.dao.StudentMapper;
import com.ff.pojo.Student;
import com.ff.service.StuService;
@Service
public class StuServiceImpl implements StuService{

	@Autowired
	StudentMapper stuMapper;
	
	/*
	 * 注册和增加
	 * @see com.ff.service.StuService#insert(com.ff.pojo.Student)
	 */
	@Override
	public int insert(Student record) {
		// TODO Auto-generated method stub
		return stuMapper.insert(record);
	}

	/*
	 * 登录
	 * @see com.ff.service.StuService#login(com.ff.pojo.Student)
	 */
	@Override
	public boolean login(Student s) {
		// TODO Auto-generated method stub
		if( stuMapper.login(s) !=null) {
			return true;
		}
		return false;
	}

	@Override
	public int updateByPrimaryKey(Student s) {
		// TODO Auto-generated method stub
		return stuMapper.updateByPrimaryKey(s);
	}

	@Override
	public List<Student> selectStu(Student s) {
		// TODO Auto-generated method stub
		return stuMapper.selectStu(s);
	}

	@Override
	public int selectCount(Student s) {
		// TODO Auto-generated method stub
		return stuMapper.selectCount(s);
	}

	@Override
	public int delBatchStu(List<String> list) {
		// TODO Auto-generated method stub
		return stuMapper.delBatchStu(list);
	}

	@Override
	public int insertSelective(Student record) {
		// TODO Auto-generated method stub
		return stuMapper.insertSelective(record);
	}

	@Override
	public int updateByPrimaryKeySelective(Student record) {
		// TODO Auto-generated method stub
		return stuMapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateMiMa(Student a) {
		// TODO Auto-generated method stub
		return stuMapper.updateMiMa(a);
	}

}
