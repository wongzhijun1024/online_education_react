package com.ff.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ff.dao.AdTopicMapper;
import com.ff.pojo.AdTopic;
import com.ff.pojo.AdVideo;
import com.ff.pojo.Msg;
import com.ff.service.AdTopicService;
import com.ff.util.CosTool;

@Service
public class AdTopicServiceImpl implements AdTopicService {

	@Autowired
	AdTopicMapper adTopicMapper;

	@Override
	public Msg getAdTopics() {
		
	
		Msg msg = new Msg();
		msg.setCode(1);

		List<AdTopic> lists = adTopicMapper.selectAdTopics();
		CosTool cosTool = new CosTool();
		for (AdTopic adTopic : lists) {

			List<AdVideo> adVideos = adTopic.getAdVideos();
			for (AdVideo adVideo : adVideos) {

				String key = adVideo.getUrl();
				if (key != null && key.length() >= 10)
					adVideo.setUrl(cosTool.getUrl(key));

			}
		}
		
		cosTool.destroy();
		cosTool=null;

		msg.setObject(lists);

		return msg;
	}

	@Override
	public Msg insertAdTopic(AdTopic adTopic) {

		Msg msg = new Msg();
		msg.setCode(0);
		msg.setMsg("添加广告视频主题失败！");
		if (adTopicMapper.insert(adTopic) == 1) {
			msg.setCode(1);
			msg.setMsg("添加广告视频主题成功！");
		}
		return msg;
	}

	@Override
	public Msg updateById(AdTopic adTopic) {
		// TODO Auto-generated method stub
		return null;
	}

}
