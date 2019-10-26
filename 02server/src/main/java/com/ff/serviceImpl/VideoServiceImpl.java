package com.ff.serviceImpl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ff.dao.VideoMapper;
import com.ff.pojo.Chapter;
import com.ff.pojo.Msg;
import com.ff.pojo.MyFile;
import com.ff.pojo.Video;
import com.ff.service.VideoService;
import com.ff.util.CosTool;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired
	private VideoMapper videoMapper;

	@Override
	public Msg selectAllVideo() {
		List<Video> list = videoMapper.selectAllVideo();
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
			for (Video video : videos) {

				video.setUrl(cosTool.getUrl(video.getUrl()));
			}
			cosTool.destroy();
			cosTool = null;
			msg.setCode(1);
			msg.setObject(videos);
		}
		return msg;
	}

	@Override
	public Msg insertVideo(Video video, HttpServletRequest request) {

		Msg msg = new Msg();

		// 查询是否已经存在该老师
		if (videoMapper.getVideosByName(video).size() >= 1) {
			msg.setCode(2);
			msg.setMsg("已经存在(" + video.getName() + ")视频");
			return msg;
		}

		if (videoMapper.insert(video) == 1) {
			msg.setCode(1);
			// 更新文件id，通过文件id查找files表对应的图片key，通过key查找腾讯服务器的图片
			video.setFileId("video" + video.getId());
			// 把fileID更新到video表里面
			videoMapper.updateById(video);
			// 插入视频文件
			CosTool cosTool = new CosTool();
			List<String> keyList = cosTool.uploadFile(CosTool.VIDEO_FOLDER, request);
			if (keyList.size() > 1) {

			} else {
				msg.setMsg("添加视频(" + video.getName() + ")成功!");
			}

		} else {
			msg.setCode(1);
			msg.setMsg("添加视频(" + video.getName() + ")失败!");
			msg.setObject(video);
		}

		FilesServiceImpl filesServiceImpl = new FilesServiceImpl();

//		for(int i=0;i<keyList.size();i++) {
//			MyFile myFile = new MyFile();
//			myFile.setUrl(keyList.get(i));
//			myFile.setFileId(fileId);
//		}
//		
//		
//		
//		MyFile myFile = new MyFile();
//		filesServiceImpl.insertFile(file)

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
		Video buffer = videoMapper.getVideo(video);

		if (buffer != null) {
			msg.setCode(1);
			CosTool cosTool = new CosTool();

			buffer.setUrl(cosTool.getUrl(buffer.getUrl()));
			cosTool.destroy();
			cosTool = null;
			msg.setObject(buffer);
		}

		return msg;
	}

}
