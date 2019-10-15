package com.ff.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ff.dao.VideoMapper;
import com.ff.pojo.Chapter;
import com.ff.pojo.Msg;
import com.ff.pojo.Video;
import com.ff.service.VideoService;
import com.ff.util.CosTool;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired
	private VideoMapper videoMapper;

	@Override
	public Msg selectAllVideo() {
		List<Video> list = videoMapper.getAllVideo();
		Msg msg = new Msg();
		msg.setCode(1);
		msg.setObject(list);
		return msg;
	}

	@Override
	public Msg selectVideosByChapterId(Chapter chapter) {
		Msg msg = new Msg();
		// 根据科目id获得对应的课程列表
		List<Video> videos = videoMapper.getVideosByChapterId(chapter.getId());
		if (videos.size() == 0) {
			msg.setCode(2);
			msg.setMsg("没有(" + chapter.getName() + ")对应的视频，请添加视频");
		} else {
			CosTool cosTool = new CosTool();
			for(Video video : videos) {
				
				
				video.setUrl(cosTool.getUrl(video.getUrl()));
			}
			cosTool.destroy();
			cosTool=null;
			msg.setCode(1);
			msg.setObject(videos);
		}
		return msg;
	}

	@Override
	public Msg insertVideo(Video video) {
		Msg msg = new Msg();
		if (videoMapper.insert(video) == 1) {
			msg.setCode(1);
			msg.setMsg("添加视频(" + video.getName() + ")成功!");
			
			CosTool cosTool = new CosTool();
			
			video.setUrl(cosTool.getUrl(video.getUrl()));
			
			cosTool.destroy();
			cosTool=null;
			
			msg.setObject(video);
		} else {
			msg.setCode(1);
			msg.setMsg("添加视频(" + video.getName() + ")失败!");
			msg.setObject(video);
		}

		return msg;
	}

	@Override
	public Msg updateById(Video video) {
		Msg msg = new Msg();
		if (videoMapper.updateById(video) == 1) {
			msg.setCode(1);
		}
		return msg;
	}

	@Override
	public Msg getVideo(Video video) {
		Msg msg = new Msg();
		Video buffer=videoMapper.getVideo(video);
		
		if(buffer!=null) {
			msg.setCode(1);
			CosTool cosTool = new CosTool();
			
			buffer.setUrl(cosTool.getUrl(buffer.getUrl()));
			cosTool.destroy();
			cosTool=null;
			msg.setObject(buffer);
		}
		
		return msg;
	}

}
