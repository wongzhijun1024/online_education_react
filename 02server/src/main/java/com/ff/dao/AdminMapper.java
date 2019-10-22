package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ff.pojo.Admin;

@Mapper
public interface AdminMapper {
	int deleteByPrimaryKey(Integer sysId);

	int insert(Admin record);

	int insertSelective(Admin record);

	Admin selectByPrimaryKey(Integer sysId);

	int updateByPrimaryKeySelective(Admin record);

	int updateByPrimaryKey(Admin record);

	/**
	 * 查询用户
	 * 
	 * @param 用户对象
	 * @return 用户对象
	 */
	Admin check(Admin a);

	/*
	 * 修改密码
	 */
	int updateMiMa(Admin a);

	/*
	 * 分页查询和显示
	 */
	List<Admin> selectAdmin(Admin a);

	int selectCount(Admin a);

	/*
	 * 删除和批量删除
	 */
	int delBatchAdmin(List<String> list);
}