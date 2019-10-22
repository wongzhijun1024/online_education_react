package com.ff.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ff.dao.AdminMapper;
import com.ff.pojo.Admin;
import com.ff.pojo.Msg;
import com.ff.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminMapper adminMapper;

	@Override
	public Msg check(Admin admin) {
		// 创建信息对象
		Msg msg = new Msg();

		System.out.println(admin);
		// 查询用户信息
		Admin buffer = adminMapper.check(admin);
		// 验证用户的合法性
		if (null == buffer) {
			msg.setMsg("用户不存在，请联系管理员!");
		} else {
			// 获得查询的用户名
			String bufferPasswd = buffer.getPasswd();
			String passwd = admin.getPasswd();

			if (bufferPasswd.endsWith(passwd)) {
				msg.setCode(1);// 用户合法
				msg.setMsg("用户合法!");
			} else {
				msg.setCode(0);// 用户存在，但是密码不正确
				msg.setMsg("密码错误，请重新输入密码!");
			}

		}
		return msg;
	}

}
