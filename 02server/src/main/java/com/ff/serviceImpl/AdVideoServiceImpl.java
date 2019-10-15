package com.ff.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ff.dao.AdVideoMapper;
import com.ff.pojo.AdVideo;
import com.ff.pojo.Msg;
import com.ff.service.AdVideoService;
import com.ff.util.CosTool;

@Service
public class AdVideoServiceImpl implements AdVideoService {

	@Autowired
	AdVideoMapper adVideoMapper;

	@Override
	public Msg AdVideoTopics() {

		Msg msg = new Msg();

		msg.setCode(1);

		msg.setObject(adVideoMapper.selectAdTopics());

		return msg;
	}

	@Override
	public Msg insertAdVideo(AdVideo adVideo) {
		Msg msg = new Msg();
		msg.setCode(0);
		if (adVideoMapper.insert(adVideo) == 1) {
			msg.setCode(1);
			msg.setMsg("广告视频添加成功！");

			CosTool cosTool = new CosTool();

			adVideo.setUrl(cosTool.getUrl(adVideo.getUrl()));
			
			cosTool.destroy();
			cosTool=null;

			msg.setObject(adVideo);
		}
		return msg;
	}

	@Override
	public Msg updateVideo(AdVideo adVideo) {
		Msg msg = new Msg();
		if (adVideoMapper.updateVideo(adVideo) == 1) {
			msg.setCode(1);
			msg.setMsg("更新广告视频！");

			CosTool cosTool = new CosTool();

			adVideo.setUrl(cosTool.getUrl(adVideo.getUrl()));
			cosTool.destroy();
			cosTool=null;

			msg.setObject(adVideo);

		}

		return msg;
	}

}
