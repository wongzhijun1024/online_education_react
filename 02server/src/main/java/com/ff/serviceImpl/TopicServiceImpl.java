package com.ff.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ff.dao.TopicMapper;
import com.ff.pojo.Msg;
import com.ff.pojo.Topic;
import com.ff.service.TopicService;
@Service
public class TopicServiceImpl implements TopicService{

	@Autowired
	TopicMapper topicMapper;
	
	@Override
	public Msg selectTopics() {
		
		Msg msg = new Msg();		
		msg.setObject(topicMapper.selectTopics());
		msg.setCode(1);
		msg.setMsg("查询成功！");
		
		return msg;
	}

	@Override
	public Msg insertTopics(Topic topic) {
		Msg msg = new Msg();		
		//查询是否已经存在该科目
		if(topicMapper.selectTopic(topic.getName())!=null) {
			msg.setCode(2);
			msg.setMsg("已经存在("+topic.getName()+")科目");
		}else {
			//增加科目
			if(topicMapper.insert(topic)==1) {
				msg.setCode(1);
				msg.setObject(topic);
				msg.setMsg("添加("+topic.getName()+")成功!");
			}else {
				msg.setCode(-1);
				msg.setMsg("添加("+topic.getName()+")失败!");
			}
	
		}
				
		return msg;
	}

	

}
