package com.ff.serviceImpl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
	public Msg selectVideosByChapterId(Chapter chapter) {
		Msg msg = new Msg();
		// 根据科目id获得对应的课程列表
		List<Video> videos = videoMapper.selectVideosByChapterId(chapter.getId());
		if (videos.size() == 0) {
			msg.setCode(2);
			msg.setMsg("没有(" + chapter.getName() + ")对应的视频，请添加视频");
		} else {
			CosTool cosTool = new CosTool();
			for (Video video : videos) {

				if (!video.getUrl().endsWith("0")) {
					video.setUrl(cosTool.getUrl(video.getUrl()));
				}

			}
			cosTool.destroy();
			cosTool = null;
			msg.setCode(1);
			msg.setMsg("查询视频成功！");
			msg.setObject(videos);
		}
		return msg;
	}

	@Override
	public Msg insertVideo(Video video, HttpServletRequest request) {

		Msg msg = new Msg();

		// 查询是否已经存在该老师
		if (videoMapper.selectVideosByName(video).size() >= 1) {
			msg.setCode(2);
			msg.setMsg("已经存在(" + video.getName() + ")视频");
			return msg;
		}

		CosTool cosTool = new CosTool();
		List<String> keyList = cosTool.uploadFile(CosTool.VIDEO_FOLDER, request);

		if (keyList.size() == 0) {
			msg.setMsg("图片添加失败!");
			return msg;
		}

		// 保存视频地址
		video.setUrl(keyList.get(0));

		if (videoMapper.insert(video) == 1) {
			msg.setCode(1);
			msg.setMsg("添加视频(" + video.getName() + ")成功!");
			// 根据key值到腾讯服务器换视频地址
			video.setUrl(cosTool.getUrl(video.getUrl()));
			msg.setObject(video);
		} else {
			msg.setCode(1);
			msg.setMsg("添加视频(" + video.getName() + ")失败!");
		}

		return msg;
	}

	@Override
	public Msg updateVideoById(Video video, HttpServletRequest request) {
		Msg msg = new Msg();
		msg.setMsg("更新失败!");
		if (video.getId() != -1) {

			CosTool cosTool = new CosTool();
			List<String> keyList = cosTool.uploadFile(CosTool.VIDEO_FOLDER, request);

			if (keyList.size() == 0) {
				msg.setMsg("视频添加失败!");
				return msg;
			}
			video.setUrl(keyList.get(0));
			if (videoMapper.updateByVideoId(video) == 1) {
				msg.setMsg("更新成功！");
				// 根据key值到腾讯服务器换视频地址
				video.setUrl(cosTool.getUrl(video.getUrl()));
				msg.setObject(video);
			}

		}

		return msg;
	}

}
