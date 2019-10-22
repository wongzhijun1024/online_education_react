package com.ff.service;

import com.ff.pojo.Admin;
import com.ff.pojo.Msg;

public interface AdminService {

	/**
	 * 验证用户合法
	 * 
	 * @param 用户信息
	 * @return 是否合法
	 */
	Msg check(Admin admin);

}
